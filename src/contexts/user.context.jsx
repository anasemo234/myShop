import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
// useContext used to create commmon data that can be accessed thru component hierarchy wihout passing
// the props down manually to each level

// Any componenets inside the provider
// EX. (In index.js)
// <UserProvider>
// <App />
// </UserProvider>

// Sign-in form needs to access context b/c whenever users signs,
//  I need user object and store inside conext

// Actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Its calls a callback when user is sign in or sign out because that is an AuthStateChange
    // The moment this listener mounts it will check the auh state automatically when listener is initialize
    const unsubcribe = onAuthStateChangedListener((user) => {
      // if user comes thru then it will create a user doc
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
