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

  const userProfileUpdate = (userName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
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

  const name = { name: "shohag" };

  const authInfo = {
    user,
    googleSignIn,
    userSignOut,
    createUserWithEmail,
    userProfileUpdate,
    userLogin,
    setLoading,
    loading,
    name,
  };

  return (
    <AuthProvaider.Provider value={authInfo}>{children}</AuthProvaider.Provider>
  );
};

export default AuthContex;
