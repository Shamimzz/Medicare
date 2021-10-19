
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut,FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react"
import Initializetion from "../Pages/Login/Firebase/Firebase.ini";

 
// 1. inisialize firebase from firebase.ini
Initializetion();

// 2. set provider as shown firebase.
const googleAuthProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

// 3. create Firebase function.
export const useFirebase = () => {
    const [user, setUser] = useState({}); //empty arry true.
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(true);
     

  // Sign in with email & password.
    const SignInWithEmail = (e) =>{
      e.preventDefault()
      console.log(email,password);
      Initializetion.auth().signInWithEmailAndPassword(email,password)
      .then(()=>{
        alert("Login success")
      })
      .catch((error)=>{
        alert("No user exist | ",error);
      })
    }
  

    const handeleGoogleAuth = () => {
      setIsLoading(true);
      // return korci then er kaj ta login a korci.
      return signInWithPopup(auth, googleAuthProvider)
      .finally(()=> setIsLoading(false));
    }
    

  // Auth state change or not.
  useEffect( () => {
    const Unsubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
        else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => Unsubscribe;
    }, [])
    

  // Sign-out successful.
  // Signout korle object ta empty.
  const handleLogOut = () => {
    setIsLoading(true);
      signOut(auth)
      .then(() => {setUser({})})
      .finally(()=> setIsLoading(false))
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

  return {
      user,
      isLoading, 
      handeleGoogleAuth,
      handleLogOut,
      handelFacbook,
      SignInWithEmail,
    };
}

export default useFirebase;