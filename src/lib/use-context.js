import React, { useState } from "react";




export const TransactionContext = React.createContext();
export const TransactionProvider = ({ children }) => {
    const [dropdowndata,setDropdowndata] = useState([])
  return (
    <TransactionContext.Provider
      value={{
        dropdowndata,setDropdowndata
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
