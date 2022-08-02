import { Link } from "react-router-dom";

export function Login() {
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