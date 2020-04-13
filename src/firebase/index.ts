import * as firebase from 'firebase/app';
import 'firebase/database';

class Firebase {
  private database: firebase.database.Database;
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDSjqqXBtLSW8vjafTzHgCi58sknPBDzpo',
      authDomain: 'crossword-1a16f.firebaseapp.com',
      databaseURL: 'https://crossword-1a16f.firebaseio.com',
      projectId: 'crossword-1a16f',
      storageBucket: 'crossword-1a16f.appspot.com',
      messagingSenderId: '689702702080',
      appId: '1:689702702080:web:30bac45d6615c03e8c9ce5',
      measurementId: 'G-31ZS195PBN',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
  }

  setupChangeListener(
    callback: (snapshot: firebase.database.DataSnapshot) => void,
  ) {
    this.database.ref('/').on('value', callback);
  }

  write(index: number, val: string) {
    this.database.ref(`/${index}/text`).set(val.toUpperCase());
  }
}

export default new Firebase();
