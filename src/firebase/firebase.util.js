import { initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';
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
var db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth, additionalData);
  if (!userAuth) return;
  // // const docRef = doc('users');
  // // const docSnap = await getDoc(docRef);
  const snapShot = await getDocs(collection(db, 'users'));
  const userRef = doc(db, 'users', userAuth.uid);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
