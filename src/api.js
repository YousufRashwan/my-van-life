import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { redirect } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAI3wLD20VL_EMkGRMMDu8y0qpcTYU_gWs",
  authDomain: "vanlife-ec1db.firebaseapp.com",
  projectId: "vanlife-ec1db",
  storageBucket: "vanlife-ec1db.appspot.com",
  messagingSenderId: "98862810161",
  appId: "1:98862810161:web:de30ffc720e9bdc32a0110",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansRef = collection(db, "vans");

export async function getVans() {
  const vansSnapshot = await getDocs(vansRef);
  const vansArr = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansArr;
}

export async function getVan(id) {
  const vanRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(vanRef);
  const van = {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
  return van;
}

// Add a getHostVans for vans with tokens, and getHostVan
// to search for the van in only van with tokens

//setTimeout function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function loginUser(user) {
  const auth = getAuth();

  const response = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);

  return null;
}

export async function signupUser(user) {
  const auth = getAuth();

  const response = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);

  return null;
}

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const loggedIn = sessionStorage.getItem("Auth Token");

  if (!loggedIn) {
    throw redirect(
      `/register?message=You must log in first&redirectTo=${pathname}`
    );
  }
}
