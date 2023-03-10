import React, { createContext, useState } from "react";

export const SettingContext = createContext();

export const SettingProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("bg-slate-100");
  const [fullScreen, setFullScreen] = useState(true);

  return (
    <SettingContext.Provider
      value={[bgColor, setBgColor, fullScreen, setFullScreen]}
    >
      {children}
    </SettingContext.Provider>
  );
};
