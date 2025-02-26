import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confige";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);


const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     // email and password register
     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)

     };
     // email and password login
     const loginUser = (email, password) => {
          setLoading(true)

          return signInWithEmailAndPassword(auth, email, password)
     };

     // google login

     const googleLogin = () => {
          setLoading(true)

          return signInWithPopup(auth, GoogleProvider)
     };


     const logOut = () => {
          setLoading(true)

          return signOut(auth);
     };

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false)

          })
     }, []);

     const updateUserProfile = (name) => {
          return updateProfile(auth.currentUser, {
               displayName: name,
               // photoURL: photo,
          })
     }

     // pages top 

     const PageTop = () => {
          useEffect(() => {
               window.scrollTo(0, 0)
          }, []);
     }


     const authInfo = {
          createUser,
          loginUser,
          googleLogin,
          logOut,
          user,
          loading,
          updateUserProfile,
          PageTop,
          setUser,
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;


AuthProvider.propTypes = {

     children: PropTypes.node
}