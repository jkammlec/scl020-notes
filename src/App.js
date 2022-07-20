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
        <p>Email:</p>
        <p>Password:</p>
        <p><Link className="links" to="/">↩️</Link></p>
      </main>
      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </>
  );
}
function Register() {
  return (
    <>
      <main>
      <h1>Enter your data to register</h1>
        <p>User:</p>
        <p>Email:</p>
        <p>Password:</p>
        <p><Link className="links" to="/">↩️</Link></p>
      </main>
    </>
  );
}
function Notes() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
    </>
  );
}

export default App;
