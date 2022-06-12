// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import {getAnalytics} from 'firebase/analytics';
import firebaseConfig from './firebase-config'
import { getDatabase } from 'firebase/database'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
// const analytics = getAnalytics(app);

export { app, db }
