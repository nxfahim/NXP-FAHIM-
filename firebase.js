// Firebase SDK Import

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getFirestore,
doc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// YOUR FIREBASE CONFIG

const firebaseConfig = {

apiKey: "AIzaSyAoxmbm1YTrPUCNynB8DSw_98gTX2gQ-pY",

authDomain: "nx-fahim-58afc.firebaseapp.com",

projectId: "nx-fahim-58afc",

storageBucket: "nx-fahim-58afc.firebasestorage.app",

messagingSenderId: "596267695695",

appId: "1:596267695695:web:f4805f87d3547786adb43a",

measurementId: "G-E88S8V84XN"

};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// EXPORTS

export {
db,
auth,
provider,
doc,
getDoc,
updateDoc,
signInWithPopup,
signOut,
onAuthStateChanged
};
