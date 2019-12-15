import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBd1bWWCmixk0C5298XrPArAHD9ASkbkdU",
  authDomain: "taskweb-a2205.firebaseapp.com",
  databaseURL: "https://taskweb-a2205.firebaseio.com",
  projectId: "taskweb-a2205",
  storageBucket: "taskweb-a2205.appspot.com",
  messagingSenderId: "522091145487",
  appId: "1:522091145487:web:c67833c9a0cdd6bcdbf67a",
  measurementId: "G-1KP5WSBZZM"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 