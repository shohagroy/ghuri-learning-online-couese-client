import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthProvaider = createContext();

const AuthContex = ({ children }) => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.error(error);
        setUser("");
      });
    setLoading(false);
  };

  const facebookSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const gitHubSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userProfileUpdate = (userName, photoUrl, phone) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
      phone: phone,
    });
  };

  const EmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleSignIn,
    userSignOut,
    createUserWithEmail,
    userProfileUpdate,
    userLogin,
    setLoading,
    loading,
    EmailVerification,
    facebookSignin,
    gitHubSignin,
    passwordResetEmail,
  };

  return (
    <AuthProvaider.Provider value={authInfo}>{children}</AuthProvaider.Provider>
  );
};

export default AuthContex;
