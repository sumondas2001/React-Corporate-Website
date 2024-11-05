import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confige";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);


const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)
     // email and password register
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)

     };
     // email and password login
     const loginUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     };

     // google login

     const googleLogin = () => {
          return signInWithPopup(auth, GoogleProvider)
     };


     const logOut = () => {
          return signOut(auth);
     };

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
          })
     }, [])



     const authInfo = {
          createUser,
          loginUser,
          googleLogin,
          logOut,
          user
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;