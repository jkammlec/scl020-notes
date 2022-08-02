import { Link } from "react-router-dom";

export function Register() {
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