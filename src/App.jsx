import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import SellCrypto from "./pages/SellCrypto";
import BuyCrypto from "./pages/BuyCrypto";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
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
          path="/BuyCrypto"
          element={
            <>
              <Navbar />
              <BuyCrypto />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
