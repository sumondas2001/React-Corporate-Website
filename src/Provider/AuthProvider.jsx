import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.confige";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)

     };

     const loginUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }



     const authInfo = {
          createUser,
          loginUser
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;