import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Component/LogIn/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const registerUser = (email, password,name,navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to database
            // saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
           navigate.replace('/home');
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const destination = location?.state?.from || "/home";
    navigate.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate ) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    // const destination = location?.state?.from || "/home";
    navigate.replace("/home");
    const user = result.user;
    // saveUser(user.email, user.displayName, 'PUT')
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false))
    }

    // observe user
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
          if (user) {
              setUser(user);
          }
          else {
              setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, [])

    // useEffect(() => {
    //   fetch(`https://agile-fortress-60515.herokuapp.com/users/${user.email}`)
    //   .then(res => res.json())
    //   .then(data => setAdmin(data.admin))
    // } , [user.email])

    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
          .then(() => { })
          .finally(() => setIsLoading(false));
  }

    // const saveUser = (email, displayName, method) => {
    //   const user = {email, displayName};
    //   fetch('https://agile-fortress-60515.herokuapp.com/users', {
    //     method: method,
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    //   })
    //   .then()
    // }

    return{
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError, 
        signInWithGoogle
    }
};

export default useFirebase;