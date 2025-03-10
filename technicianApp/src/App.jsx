import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthProvider } from "./context/ContextApi";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {/* <Login /> */}
        <Home />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
