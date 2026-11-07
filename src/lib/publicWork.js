// Reads the Recent Work cards for the public page with one plain request to
// Firestore's REST API, so visitors don't download the Firebase library.
// The admin page still uses the full SDK (src/lib/workStore.js) for editing.
// Anyone can read the `work` collection (see firestore.rules), so no sign-in is needed.

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'coylabs-dev'
const URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/work?pageSize=100`

// Firestore REST wraps every value in its type, e.g. { stringValue: 'x' }.
function unwrap(v) {
  if (!v) return null
  if ('stringValue' in v) return v.stringValue
  if ('booleanValue' in v) return v.booleanValue
  if ('integerValue' in v) return Number(v.integerValue)
  if ('doubleValue' in v) return v.doubleValue
  if ('nullValue' in v) return null
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(unwrap)
  return null
}

export async function fetchPublicWork() {
  const res = await fetch(URL)
  if (!res.ok) throw new Error(`Firestore ${res.status}`)
  const { documents = [] } = await res.json()
  return documents
    .map((d) => {
      const item = { id: d.name.split('/').pop() }
      for (const [k, v] of Object.entries(d.fields || {})) item[k] = unwrap(v)
      item.tags = item.tags || []
      return item
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
