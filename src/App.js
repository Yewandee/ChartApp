import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import MyResponsiveSunburst from './components/chart/chart';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from './theme';
import PersistentDrawerLeft from './components/drawer/drawer';



function App() {

  const mode = useSelector((state) => state.recipe.mode);
  console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistentDrawerLeft/>
      <div>
      {/* <Header /> */}
        <MyResponsiveSunburst />
      </div>
    </ThemeProvider>

  );
}

export default App;
