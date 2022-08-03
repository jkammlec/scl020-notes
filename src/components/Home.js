import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home() {
  const { loginWithGoogle } = useAuth()  
  const navigate = useNavigate()
  const handleGoogleSignin = async () => {
      await loginWithGoogle();
      navigate ("/notes")
    }
    return (
      <>
        <main className="mainBody">
          <div className="App">
          <h1>Welcome to Cat-notes!</h1>
          <p>Login with <button className="google" onClick={handleGoogleSignin} ></button></p>
          <p><Link className="links" to="/login">Login with email</Link></p>
          <p><Link className="links" to="/register">Register</Link></p>
          </div>
        </main>
      </>
    );
  }