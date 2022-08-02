import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home() {

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