
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL7fUkg6NE0_CrfqWbtdXh7oh7gvfMxEA",
  authDomain: "examosai-2.firebaseapp.com",
  projectId: "examosai-2",
  storageBucket: "examosai-2.firebasestorage.app",
  messagingSenderId: "915813842191",
  appId: "1:915813842191:web:c17360c4a195dc8dd8927a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
