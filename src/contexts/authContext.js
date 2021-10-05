// import React, { Children, createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   //   //firebase config starts
//   //   initializeApp(firebaseConfig);
//   //   const auth = getAuth();

//   //   const registerAccount = (userName, userEmail, usePassword) => {
//   //     const name = userName;
//   //     const email = userEmail;
//   //     const password = usePassword;

//   //     createUserWithEmailAndPassword(auth, email, password)
//   //       .then((userCredential) => {
//   //         updateProfile(auth.currentUser, {
//   //           displayName: name,
//   //         });

//   //         setCurrentUser(userCredential);
//   //         // ...
//   //       })
//   //       .catch((error) => {
//   //         const errorCode = error.code;
//   //         const errorMessage = error.message;
//   //         console.log(errorCode, errorMessage);
//   //         // ..
//   //       });
//   //   };
//   //firebase config ends
//   const test = 12;
//   return <AuthContext.Provider value={test}>{Children}</AuthContext.Provider>;
// };
