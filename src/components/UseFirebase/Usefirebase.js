
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react"
import Initializetion from "../Pages/Login/Firebase/Firebase.ini";

 
// 1. inisialize firebase from firebase.ini
Initializetion();

// 2. set provider as shown firebase.
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

// 3. create Firebase function.
const useFirebase = () => {
    const [user, setUser] = useState({}); //empty arry true.
    const [error, setError] = useState('');
     
    const signInUseingGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUser(user);  
        })
        .catch((error) => {
           setError(error.message);
       })
    }
    
  // Auth state change.
  useEffect( () => {
      onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
      });
    }, [])
    
  // Sign-out successful.
  // Signout korle object ta empty.
  const handleLogOut = () => {
      signOut(auth).then(() => {
        setUser({}); 
      })
      .catch((error) => {
        setError(error.message);
      });
    }
   
  // FaceBook Log In ...
  const handelFacbook = () => {
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const { displayName, photoUrl, email} = result.user;
      console.log(result.user);
      const loggedUser = {
        name : displayName,
        email : email,
        photo : photoUrl
      }
       setUser(loggedUser);
     })
    .catch((error) => {
      setError(error.message);
    });
  }

  return {user, error, signInUseingGoogle, handleLogOut, handelFacbook};
}

export default useFirebase;