// // // UserContext.js
// // import { createContext, useContext, useState } from 'react';

// // // Create a context
// // const UserContext = createContext();

// // // Create a provider component
// // export const UserProvider = ({ children }) => {
// //   const [username, setUsername] = useState('');

// //   return (
// //     <UserContext.Provider value={{ username, setUsername }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // };

// // // Custom hook to use the UserContext
// // export const useUser = () => {
// //   return useContext(UserContext);
// // };

// import  { createContext, useContext, useState, useEffect } from 'react';

// // Create a context
// const UserContext = createContext();

// // Create a provider component
// export const UserProvider = ({ children }) => {
//   const [username, setUsername] = useState('');

//   // Load username from localStorage when the app initializes
//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername); // Set username from localStorage
//     }
//   }, []);

//   // Save username to localStorage when it changes
//   const updateUsername = (name) => {
//     setUsername(name);
//     localStorage.setItem('username', name); // Save to localStorage
//   };

//   return (
//     <UserContext.Provider value={{ username, setUsername: updateUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use the UserContext
// export const useUser = () => {
//   return useContext(UserContext);
// };
import  { createContext, useContext, useState, useEffect } from 'react';

// Create User Context
const UserContext = createContext(); // This should exist

// Hook to use the User context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(() => {
    // Load username from localStorage if it exists (for persistent login)
    return localStorage.getItem('username') || null;
  });

  useEffect(() => {
    // Save username to localStorage whenever it changes
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
