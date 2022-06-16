import { get, ref } from 'firebase/database'
import { db } from '../globals/firebase-init'

const grave = {
  async getAllBlok () {
    const bloks = ref(db, 'grave/')
    const snapshot = await get(bloks)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  },

  async getBlokById (id) {
    const slots = ref(db, 'grave/' + id)
    const snapshot = await get(slots)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  },

  async getPrice () {
    const price = ref(db, 'price/')
    const snapshot = await get(price)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  }
}

export default grave
