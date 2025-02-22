import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthProvider } from "./context/ContextApi";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {/* <Login /> */}
      </AuthProvider>
      <Home />
    </>
  );
}

export default App;
