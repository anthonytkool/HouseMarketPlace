// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAdK_TYc_h_QxwfYlaSKzi7xlVL5pKwh_8',
  authDomain: 'condo-marketplace.firebaseapp.com',
  projectId: 'condo-marketplace',
  storageBucket: 'condo-marketplace.appspot.com',
  messagingSenderId: '342096691681',
  appId: '1:342096691681:web:8752ed38f6f56293df12a0',
  measurementId: 'G-7YE0SGLLGD',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
