import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAyp9g6-tj1veI5ao5dAeu1Fs7JcwpNewc",
    authDomain: "jsx-18dce.firebaseapp.com",
    projectId: "jsx-18dce",
    databaseURL : "https://jsx-18dce-default-rtdb.firebaseio.com/",
    storageBucket: "jsx-18dce.appspot.com",
    messagingSenderId: "1034729320155",
    appId: "1:1034729320155:web:413fa18555a9e9b357e6fe"
  };
  


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()