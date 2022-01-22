import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

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

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BMaaGI-DYabir8IV99i7cUp9CYGXiaPe_T_RvrnbsN7PW7uljR-vN-9fNcDPtyKx5YB4iY695G03Lbt7VZsdBBY'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
