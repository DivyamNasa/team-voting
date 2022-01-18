import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
  apiKey: "AIzaSyBJfVH5qL4RWN-HpxYLPy38CazfsIihu9E",
  authDomain: "team-voting-6a06e.firebaseapp.com",
  projectId: "team-voting-6a06e",
  storageBucket: "team-voting-6a06e.appspot.com",
  messagingSenderId: "517198222468",
  appId: "1:517198222468:web:0f00f9e4d669d772331ed1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();