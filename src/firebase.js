import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDQe5Zg-SqtjPD_X3y5EYPH9jYlCfsz4sI",
  authDomain: "goalcoach-b409f.firebaseapp.com",
  databaseURL: "https://goalcoach-b409f.firebaseio.com",
  projectId: "goalcoach-b409f",
  storageBucket: "goalcoach-b409f.appspot.com",
  messagingSenderId: "694214892021"
};

export const firebaseApp = firebase.initializeApp(config);
