import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCPaJ7e6q-LVbG-TqoZbsKeziHTTxe4e1M",
  authDomain: "school-app-temp.firebaseapp.com",
  projectId: "school-app-temp",
  storageBucket: "school-app-temp.appspot.com",
  messagingSenderId: "150432146775",
  appId: "1:150432146775:web:02ab1a43de1863e249ca12"
};

firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();