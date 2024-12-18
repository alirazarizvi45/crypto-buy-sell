import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateOffer from "./pages/CreateOffer/CreateOffer";
import Dashboard from "./pages/Dashboard/Dashoboard";
import Ranks from "./pages/Ranks";
import { Home } from "./pages/home";
import SellCrypto from "./pages/SellCrypto";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer/Footer";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import Steps from "./pages/convert/Steps";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ControlPanel from "./pages/ControlPanel/ControlPanel";

import { responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./theme";
import { useState } from "react";
import EmailVerification from "./pages/EmailVerification";
import User from "./pages/Dashboard/User";
// import Vip from "./pages/Dashboard/VIP";
import Affiliate from "./pages/Dashboard/Affiliate";
import Vip from "./pages/Dashboard/Vip";
import Referrals from "./pages/Dashboard/Referrals";
import WalletPannel from "./pages/Wallet/WalletPannel";

function App() {
  const [mode, setMode] = useState(false);

  let theme = createCustomTheme(mode ? "light" : "dark");
  theme = responsiveFontSizes(theme);
  const themeToggler = () => {
    setMode(!mode);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home mode={mode} themeToggler={themeToggler} />
                <Footer />
              </>
            }
          />
          <Route
            path="/BuyCrypto"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <BuyCrypto />
              </>
            }
          />

          <Route
            path="/SellCrypto"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <SellCrypto />
              </>
            }
          />
          <Route
            path="/Swap"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <Steps />
              </>
            }
          />
          <Route
            path="/CreateOffer"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <CreateOffer />
              </>
            }
          />
          <Route
            path="/ControlPanel"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <ControlPanel />
              </>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <>
                <Navbar
                  mode={mode}
                  themeToggler={themeToggler}
                  isLoggedIn={true}
                />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <Navbar
                  mode={mode}
                  themeToggler={themeToggler}
                  isLoggedIn={true}
                />
                <User />
              </>
            }
          />
          <Route
            path="/vip"
            element={
              <>
                <Navbar
                  mode={mode}
                  themeToggler={themeToggler}
                  isLoggedIn={true}
                />
                <Vip />
              </>
            }
          />
          <Route
            path="/Affiliate"
            element={
              <>
                <Navbar
                  mode={mode}
                  themeToggler={themeToggler}
                  isLoggedIn={true}
                />
                <Affiliate />
              </>
            }
          />
          <Route
            path="/Referrals"
            element={
              <>
                <Navbar
                  mode={mode}
                  themeToggler={themeToggler}
                  isLoggedIn={true}
                />
                <Referrals />
              </>
            }
          />
          <Route
            path="/Wallet"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <WalletPannel />
              </>
            }
          />

          <Route
            path="/Ranks"
            element={
              <>
                <Ranks />
              </>
            }
          />
          <Route
            path="/Register"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <Register mode={mode} />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <Login mode={mode} />
              </>
            }
          />
          <Route
            path="/email-verification"
            element={
              <>
                <Navbar mode={mode} themeToggler={themeToggler} />
                <EmailVerification mode={mode} />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
