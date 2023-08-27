import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [studentID, setStudentID] = useState(""); // You may fetch this from the backend

  const login = (token, stuID) => {
    setIsLoggedIn(true);
    setAccessToken(token);
    setStudentID(stuID);
    // Fetch and set studentID from the backend after successful login
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    setStudentID("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        accessToken,
        studentID,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
