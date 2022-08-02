import { Link } from "react-router-dom";
import { useState } from "react";

export function Register() {
  const [user, setUser] = useState({
    user:'',
    email: '',
    password: '',
  })
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log (user);
  }

    return (
      <>
        <main className="mainBody">
        <form className="App" onSubmit={handleSubmit}>
        <h1>Enter your data to register</h1>
          <p>User: <input id="nm" name="user" type="text" placeholder="Name or nickname" onChange={handleChange}></input></p>
          <p>Email: <input id="mail" name="email" type="text" placeholder="Email that you use" onChange={handleChange}></input></p>
          <p>Password: <input id="pass" name="password" type="password" placeholder="Password" onChange={handleChange}></input></p>
          <p><Link className="links" to="/">↩️</Link> <button id="btn_register" type="submit">Sign in</button></p>
          </form>
        </main>
      </>
    );
  }