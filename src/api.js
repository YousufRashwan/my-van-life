import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";

import { redirect } from "react-router-dom";

let users = [{ email: "b@b", password: "p123" }];

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

// use as setTimeout function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function loginUser(user) {
  // await sleep(1000);

  let foundUser;

  users.map((userData) => {
    foundUser =
      userData.email === user.email &&
      userData.password === user.password &&
      user;
  });

  if (!foundUser) {
    throw {
      message: "No user with those credentials found!",
      statusText: {},
      status: 401,
    };
  }

  foundUser.password = undefined;
  return {
    user: foundUser,
    token: "Enjoy your pizza, here's your tokens.",
  };
}

// export async function signupUser(user) {
//   await sleep(1000);
//   let foundUser;

//   users.map((userData) => {
//     foundUser = userData.email === user.email && user.email;
//   });

//   if (foundUser) {
//     throw {
//       message: "This user already exists",
//       statusText: {},
//       status: 401,
//     };
//   }

//   users.push(user);
//   return {
//     user: { email: user.email, password: "undefined" },
//     token: "Enjoy your pizza, here's your tokens.",
//   };
// }

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const loggedIn = JSON.parse(localStorage.getItem("loggedin"));

  if (!loggedIn) {
    throw redirect(
      `/register?message=You must log in first&redirectTo=${pathname}`
    );
  }
}
