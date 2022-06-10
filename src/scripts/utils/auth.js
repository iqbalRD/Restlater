import firebase from 'firebase/compat/app'
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
// import { firebaseConfig } from '../globals/firebase-config'

const firebaseConfig = {
  apiKey: 'AIzaSyANcwEQ08nCcMcm1PMm7LKXGyHyEunqW9k',
  authDomain: 'formlogin-2a45c.firebaseapp.com',
  projectId: 'formlogin-2a45c',
  storageBucket: 'formlogin-2a45c.appspot.com',
  messagingSenderId: '877903835918',
  appId: '1:877903835918:web:a932d64ba282ec58ac9d5f'
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth())
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(authResult)
      return true
    },
    uiShown () {
      // The widget is rendered.
      // Hide the loader.
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '#/profile/test',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
}

function signinUI () {
  ui.start('#firebaseui-auth-container', uiConfig)
}

const LogoutInitiator = {
  signOutUser () {
    console.log(firebase.auth().currentUser.displayName)
    console.log(getAuth().currentUser.displayName)
    // Sign out of Firebase.
    firebase.auth().signOut()
      .then(() => {
        document.location.href = '/'
      })
  }
}

const userNameElement = document.getElementById('user-name')
const signInButtonElement = document.getElementById('login')
// const signOutButtonElement = document.getElementById('logout')

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver (user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    const userName = user.displayName
    console.log(user)

    // Set the user's profile pic and name.
    userNameElement.textContent = userName

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden')

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true')

    $('#logout').on('click', LogoutInitiator.signOutUser)

    $('#user-name').on('click', () => {
      window.location.hash = '/profile/' + user.uid
    })
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true')

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden')
  }
}

// Initiate firebase auth
function initFirebaseAuth () {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver)
}

// Returns true if a user is signed-in.
function isUserSignedIn () {
  return !!getAuth().currentUser
}

export { signinUI, LogoutInitiator, initFirebaseAuth, isUserSignedIn, app }
