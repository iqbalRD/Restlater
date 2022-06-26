import { get, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-init'

const user = {
  async getAllUsers () {
    const users = ref(db, 'user/')
    const snapshot = await get(users)
    if (snapshot.exists()) {
      return snapshot.val()
    }
  },

  async getUserById (id) {
    const user = ref(db, 'user/' + id)
    const snapshot = await get(user)
    if (snapshot.exists()) {
      return snapshot.val()
    }
  },

  setUserById (id, data) {
    set(ref(db, 'user/' + id), data)
  },

  removeUserById (id) {
    set(ref(db, 'user/' + id), null)
  }
}

export default user
