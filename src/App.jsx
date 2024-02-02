import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateOffer from "./pages/CreateOffer";
import Dashoboard from "./pages/Dashoboard";
import Wallet from "./pages/Wallet";
import Ranks from "./pages/Ranks";
import { Home } from "./pages/home";
import SellCrypto from "./pages/SellCrypto";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer/Footer";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import Steps from "./pages/convert/Steps";
import Register from "./pages/Register/Register";

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
          path="/BuyCrypto"
          element={
            <>
              <Navbar />
              <BuyCrypto />
            </>
          }
        />

        <Route
          path="/SellCrypto"
          element={
            <>
              <Navbar />
              <SellCrypto />
            </>
          }
        />
        <Route
          path="/Swap"
          element={
            <>
              <Navbar />
              <Steps />
            </>
          }
        />
        <Route
          path="/CreateOffer"
          element={
            <>
              <Navbar />
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
        <Route
          path="/Register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
