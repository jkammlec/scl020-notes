import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { getAuth, signInWithRedirect } from "firebase/auth";
import { Home } from "./components/Home.js"
import { Login } from "./components/Login.js"
import { Register } from "./components/Register.js"
import { Notes } from "./components/Notes.js"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
  );
}

export default App;
