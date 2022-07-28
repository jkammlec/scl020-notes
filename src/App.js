import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

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

function Home() {
  return (
    <>
      <main className="mainBody">
        <div className="App">
        <h1>Welcome to Cat-notes!</h1>
        <p>Login with Google</p>
        <p><Link className="links" to="/login">Login with email</Link></p>
        <p><Link className="links" to="/register">Register</Link></p>
        </div>
      </main>
    </>
  );
}

function Login() {
  return (
    <>
      <main className="mainBody">
        <div className="App">
        <h1>Enter your data to log in</h1>
        <p>Email: <input id="mail" type="text" placeholder="Email that you use"></input></p>
        <p>Password: <input id="pass" type="password" placeholder="Password "></input></p>
        <p><Link className="links" to="/">↩️</Link> <Link className="links" to="/notes"><button id="btn_login" type="submit">Login</button></Link></p>
        </div>
      </main>
    </>
  );
}
function Register() {
  return (
    <>
      <main className="mainBody">
      <div className="App">
      <h1>Enter your data to register</h1>
        <p>User: <input id="nm" type="text" placeholder="Name or nickname"></input></p>
        <p>Email: <input id="mail" type="text" placeholder="Email that you use"></input></p>
        <p>Password: <input id="pass" type="password" placeholder="Password "></input></p>
        <p><Link className="links" to="/">↩️</Link> <button id="btn_register" type="submit">Sign in</button></p>
        </div>
      </main>
    </>
  );
}
function Notes() {
  return (
    <>
      <main className="notesView">
        <div className="head">
        <h1> Welcome to your cat-notes</h1>
        </div>
      </main>
    </>
  );
}

export default App;
