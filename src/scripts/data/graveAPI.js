import { child, get, push, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-init'

const grave = {
  // Get a key
  newPostKey () {
    return push(child(ref(db), 'test')).key
  },

  // const reserve = (db) => {
  //   set(ref(db, 'blokA/' + 0), {
  //     available: true,
  //     id: "A1",
  //     price: 5000000
  //   })
  // }
  // reserve(db)

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
