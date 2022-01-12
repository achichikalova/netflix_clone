import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBRCSOZlrjL-hzqLWw_D6Fy2Wht_4oPtH4",
  authDomain: "netflix-clone-4e8a2.firebaseapp.com",
  projectId: "netflix-clone-4e8a2",
  storageBucket: "netflix-clone-4e8a2.appspot.com",
  messagingSenderId: "588780350521",
  appId: "1:588780350521:web:b5ad4cd5ae02fcd02631e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;