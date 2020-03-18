import firebase from 'firebase';

// API DETAILS
const config = {
  apiKey: 'AIzaSyDI-L_eeet-rtAeEupHSWopNbZGUDyZoLQ',
  authDomain: 'celex-upiicsa.firebaseapp.com',
  databaseURL: 'https://celex-upiicsa.firebaseio.com',
  projectId: 'celex-upiicsa',
  storageBucket: 'celex-upiicsa.appspot.com',
  messagingSenderId: '247763560988',
  appId: '1:247763560988:web:4b8b2185169c49681d4dd9',
  measurementId: 'G-T3W3YS4DCT',
};

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
