import { initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA9RQnikqW1zvuBIOsHtOZa6uge8XWSQWo',
  authDomain: 'crwn-db-priti-react.firebaseapp.com',
  projectId: 'crwn-db-priti-react',
  storageBucket: 'crwn-db-priti-react.appspot.com',
  messagingSenderId: '914735445905',
  appId: '1:914735445905:web:2c0c3247e8c445a2fdcc30',
  measurementId: 'G-0S9LPFVQDN',
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
