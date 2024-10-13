import { ThemeProvider,createTheme } from "@mui/styles";
import React, {useState} from "react";
import Dashboard from "./dashboard";

const Theming = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Dashboard setDarkMode={setDarkMode}/>
      </ThemeProvider>
  )
};

export default Theming;
