import firebase from 'firebase/app';
import 'firebase/auth';

export const auth =firebase.initializeApp ({
    apiKey: "AIzaSyC0g-xEvGc-Kfe0SN39LNeXb6ylxbB4F3o",
    authDomain: "chatgram-c702f.firebaseapp.com",
    projectId: "chatgram-c702f",
    storageBucket: "chatgram-c702f.appspot.com",
    messagingSenderId: "203444962045",
    appId: "1:203444962045:web:9f06b14c70a6fb93e7f494"
  }).auth();