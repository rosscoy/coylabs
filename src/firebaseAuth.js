// Auth lives in its own module so it only loads on the /admin page,
// not for every visitor to the public site.
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { app } from './firebase'

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
