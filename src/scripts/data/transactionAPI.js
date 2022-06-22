import { get, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-init'
import { getIndex } from '../utils/get-index'

const transaction = {
  async getTransaction () {
    if (sessionStorage.getItem('transaction')) {
      return JSON.parse(sessionStorage.getItem('transaction'))
    }
    const transaction = ref(db, 'transaction')
    const snapshot = await get(transaction)
    if (snapshot.exists()) {
      sessionStorage.setItem('transaction', JSON.stringify(snapshot.val()))
      return snapshot.val()
    }
  },

  setTransaction (data, index) {
    set(ref(db, 'transaction/' + index), data)
    sessionStorage.removeItem('transaction')
  },

  // slots = ['A12', 'A2']
  setslots (slots, initial) {
    slots.forEach(slot => {
      const index = getIndex(slot)
      set(ref(db, 'grave/' + `blok${initial}` + `/${index}` + '/available'), false)
    })
  },

  removeTransaction (index) {
    set(ref(db, 'transaction/' + index), null)
    sessionStorage.removeItem('transaction')
  }
}
export default transaction
