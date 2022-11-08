import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {

  apiKey: "AIzaSyDbqs8dKsNKq3HNsnC5f-XT1Z9PLaNc0AY",

  authDomain: "ecg-demo.firebaseapp.com",

  databaseURL: "https://ecg-demo-default-rtdb.firebaseio.com",

  projectId: "ecg-demo",

  storageBucket: "ecg-demo.appspot.com",

  messagingSenderId: "775853856576",

  appId: "1:775853856576:web:ecd9d6dd63faae36e14ca5",

  measurementId: "G-1KWM9HTDRJ"

};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
 // eslint-disable-next-line