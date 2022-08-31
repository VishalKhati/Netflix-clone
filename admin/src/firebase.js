// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW9RH8Le9e2Tftfrf4TYPF0u_YBD8oP0Q",
  authDomain: "netflix-a5459.firebaseapp.com",
  projectId: "netflix-a5459",
  storageBucket: "netflix-a5459.appspot.com",
  messagingSenderId: "936619346771",
  appId: "1:936619346771:web:31648e8b224d0e02aaafa6",
  measurementId: "G-VQW3KR37P1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;