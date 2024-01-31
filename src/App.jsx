import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateOffer from "./pages/CreateOffer";
import Dashoboard from "./pages/Dashoboard";
import Wallet from "./pages/Wallet";
import Ranks from "./pages/Ranks";
import { Home } from "./pages/home";
import SellCrypto from "./pages/SellCrypto";
import StepOne from "./pages/convert/StepOne";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/SellCrypto"
          element={
            <>
              <SellCrypto />
            </>
          }
        />

        <Route
          path="/Swap"
          element={
            <>
              <Navbar />
              <StepOne />
            </>
          }
        />
        <Route
          path="/CreateOffer"
          element={
            <>
              <Home />
              <CreateOffer />
            </>
          }
        />
        <Route
          path="/Dashoboard"
          element={
            <>
              <Dashoboard />
            </>
          }
        />
        <Route
          path="/Wallet"
          element={
            <>
              <Wallet />
            </>
          }
        />
        <Route
          path="/Wallet"
          element={
            <>
              <Wallet />
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
      </Routes>
    </>
  );
}

export default App;
