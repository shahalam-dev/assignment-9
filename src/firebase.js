import { initializeApp } from "@firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDwyD52pO5cgaKotT58EYHOsTFDaLloSbA",
  authDomain: "test-modular-firebase.firebaseapp.com",
  projectId: "test-modular-firebase",
  storageBucket: "test-modular-firebase.appspot.com",
  messagingSenderId: "741054902209",
  appId: "1:741054902209:web:949c63919e94c71d620940",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
// export const getUser = onAuthStateChanged();

export const registerAccount = (userName, userEmail, usePassword) => {
  const name = userName;
  const email = userEmail;
  const password = usePassword;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export const LoginToAccount = (userEmail, usePassword, setError) => {
  const email = userEmail;
  const password = usePassword;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError("");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      // console.log(errorCode, errorMessage);
      // ..
    });
};

export const logOut = () => {
  signOut(auth);
};

const provider = new GoogleAuthProvider();

export const signWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// export const getUser = auth.currentUser;
