import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home.js"
import { Login } from "./components/Login.js"
import { Register } from "./components/Register.js"
import { Notes } from "./components/Notes.js"
import { Edit } from "./components/Edit.js"
import { Create } from "./components/Create.js"
import { AuthProvider } from "./context/authContext";

function App() {
  return (
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="notes" element={<Notes />} />
        <Route path="edit" element={<Edit />} />
        <Route path="create" element={<Create />} />
      </Routes>
      </AuthProvider>
  );
}

export default App;
