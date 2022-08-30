import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW9RH8Le9e2Tftfrf4TYPF0u_YBD8oP0Q",
  authDomain: "netflix-a5459.firebaseapp.com",
  projectId: "netflix-a5459",
  storageBucket: "netflix-a5459.appspot.com",
  messagingSenderId: "936619346771",
  appId: "1:936619346771:web:31648e8b224d0e02aaafa6",
  measurementId: "G-VQW3KR37P1",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
