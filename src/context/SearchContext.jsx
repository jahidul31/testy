import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("mern");
  const [searchDataCtx, setSearchDataCtx] = useState("");
  return (
    <SearchContext.Provider
      value={[searchValue, setSearchValue, searchDataCtx, setSearchDataCtx]}
    >
      {children}
    </SearchContext.Provider>
  );
};
