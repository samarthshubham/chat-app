import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCGWb4hrkrUPkK-euc6yVl2pG0R0VQtrMM",
  authDomain: "chat-web-app-315f4.firebaseapp.com",
  databaseURL: "https://chat-web-app-315f4-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-315f4",
  storageBucket: "chat-web-app-315f4.appspot.com",
  messagingSenderId: "923342820195",
  appId: "1:923342820195:web:19062eb18f02de592cb956"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
