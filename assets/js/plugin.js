import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

      const firebaseConfig = {
        apiKey: "AIzaSyCYyfp00dWfn_PEEaKlRNRqOdeztn83Ks4",
        authDomain: "atoos-menu.firebaseapp.com",
        projectId: "atoos-menu",
        storageBucket: "atoos-menu.appspot.com",
        messagingSenderId: "1004955484041",
        appId: "1:1004955484041:web:f5c49cad498826c536eb58",
        measurementId: "G-GC4ZJQ7SCM",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      import {
        getStorage,
        ref,
        uploadBytesResumable,
        getDownloadURL,
      } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

      import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        addDoc,
        getDocs,
        onSnapshot,
        deleteDoc,
        updateDoc,
      } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
      export {
        ref,
        getDocs,
        doc,
        getDoc,
        setDoc,
        collection,
        addDoc,
        onSnapshot,
        deleteDoc,
        getStorage,
        uploadBytesResumable,
        getDownloadURL,
        updateDoc};
      export const cloudDB = getFirestore();

