import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthProvider } from "./context/ContextApi";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {/* <Login /> */}
      </AuthProvider>
    </>
  );
}

export default App;
