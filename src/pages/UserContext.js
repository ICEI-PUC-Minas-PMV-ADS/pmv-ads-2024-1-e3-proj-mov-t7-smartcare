import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  const setUser = (email) => {
    console.log("email logado adicionado: ", email);
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  console.log("contexto retornado: ", context.userEmail);

  return context;
};
