import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyB4j4GBsuGFaDMdnORgGThSovDkTnnQUnc",
    authDomain: "netninja-redux.firebaseapp.com",
    databaseURL: "https://netninja-redux.firebaseio.com",
    projectId: "netninja-redux",
    storageBucket: "netninja-redux.appspot.com",
    messagingSenderId: "552883058624",
    appId: "1:552883058624:web:0d8aa831f4bf673402ba25"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase