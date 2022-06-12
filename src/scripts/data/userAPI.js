import { get, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-init'

const user = {
  async getUserById (id) {
    const user = ref(db, 'user/' + id)
    const snapshot = await get(user)
    if (snapshot.exists()) {
      return snapshot.val()
    }
  },

  setUserById (id, data) {
    set(ref(db, 'user/' + id), data)
  }
}

export default user
