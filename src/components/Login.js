import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.js";
import { async } from "@firebase/util";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => 
    setUser({ ...user, [name]: value });
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') //está vacío para que no aparezca hasta que haya un error para mostrar
    try {   
      await login(user.email, user.password);
      navigate("/notes");
    } catch (error) {
      setError(error.message); //esto muestra el error de firebase
    }
    
  }

  return (
    <>
      <main className="mainBody">
      {error && <p>{error} </p>}
        <form className="App" onSubmit={handleSubmit}>
          <h1>Enter your data to log in</h1>
          <p>Email: <input id="mail" name="email" type="email" placeholder="Email that you use" onChange={handleChange}></input></p>
          <p>Password: <input id="pass" name="password" type="password" placeholder="Password " onChange={handleChange}></input></p>
          <p><Link className="links" to="/">↩️</Link><button id="btn_login" type="submit">Login</button></p>
        </form>
      </main>
    </>
  );
}