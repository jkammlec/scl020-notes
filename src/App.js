import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home.js"
import { Login } from "./components/Login.js"
import { Register } from "./components/Register.js"
import { Notes } from "./components/Notes.js"
import { AuthProvider } from "./context/authContext";

function App() {
  return (
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
      </AuthProvider>
  );
}

export default App;
