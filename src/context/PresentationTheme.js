import React, { createContext, useContext } from "react";
import { Theme } from "../constants";

export const PresentationThemeContext = createContext({});

function PresentationThemeProvider({
  children,
  backgroundColor = Theme.BACKGROUND_COLOR,
}) {
  return (
    <PresentationThemeContext.Provider
      value={{
        backgroundColor,
        blankspaceBackgroundColor: Theme.BLANKSPACE_BACKGROUND_COLOR,
        aspectRatio: Theme.ASPECT_RATIO
      }}
    >
      {children}
    </PresentationThemeContext.Provider>
  );
}

export function usePresentationTheme(callback = (theme) => theme) {
  const presentationTheme = useContext(PresentationThemeContext);

  return callback(presentationTheme);
}

export default PresentationThemeProvider;
