import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
      <h1>Welcome to Cat-notes!</h1>
        <p>Login with Google</p>
        <p><Link className="links" to="/login">Login with email</Link></p>
        <p><Link className="links" to="/register">Register</Link></p>
      </main>
    </>
  );
}

function Login() {
  return (
    <>
      <main>
        <h1>Enter your data to log in</h1>
        <p>Email: <input id="mail" type="text" placeholder="Email that you use"></input></p>
        <p>Password: <input id="pass" type="password" placeholder="Password "></input></p>
        <p><Link className="links" to="/">↩️</Link> <button id="btn_login" type="submit">Login</button></p>
      </main>
    </>
  );
}
function Register() {
  return (
    <>
      <main>
      <h1>Enter your data to register</h1>
        <p>User: <input id="nm" type="text" placeholder="Name or nickname"></input></p>
        <p>Email: <input id="mail" type="text" placeholder="Email that you use"></input></p>
        <p>Password: <input id="pass" type="password" placeholder="Password "></input></p>
        <p><Link className="links" to="/">↩️</Link> <button id="btn_register" type="submit">Sign in</button></p>
        
      </main>
    </>
  );
}
function Notes() {
  return (
    <>
      <main>
      </main>
    </>
  );
}

export default App;
