import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBhVUWn6DC9T5HPDX_3S4x2Kkft0ZDf0AI",
  authDomain: "awarnessculture.firebaseapp.com",
  databaseURL: "https://awarnessculture-default-rtdb.firebaseio.com",
  projectId: "awarnessculture",
  storageBucket: "awarnessculture.appspot.com",
  messagingSenderId: "647599293514",
  appId: "1:647599293514:web:9dc439031f7687858712b3"
};



const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default fire;
