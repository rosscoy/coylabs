import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch, query, orderBy,
} from 'firebase/firestore/lite'
import { db } from '../firebase'

const col = collection(db, 'work')

// Returns all work items, sorted by their `order` field.
export async function fetchWork() {
  const snap = await getDocs(query(col, orderBy('order')))
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

function clean(item) {
  return {
    title: item.title.trim(),
    description: (item.description || '').trim(),
    tags: (item.tags || []).map((t) => t.trim()).filter(Boolean),
    href: item.href.trim(),
    note: item.note?.trim() || null,
    hidden: !!item.hidden,
    order: item.order,
  }
}

export function addWork(item) {
  return addDoc(col, clean(item))
}

export function updateWork(id, item) {
  return updateDoc(doc(db, 'work', id), clean(item))
}

export function deleteWork(id) {
  return deleteDoc(doc(db, 'work', id))
}

// Rewrites the `order` field of every item to match the given array order.
export async function saveOrder(items) {
  const batch = writeBatch(db)
  items.forEach((it, i) => batch.update(doc(db, 'work', it.id), { order: i }))
  await batch.commit()
}

// One-off: copy the cards from src/content/work.js into the database.
export async function importItems(items) {
  const batch = writeBatch(db)
  items.forEach((it, i) => batch.set(doc(col), clean({ ...it, order: i })))
  await batch.commit()
}
