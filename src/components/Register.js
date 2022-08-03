import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext.js";
import { async } from "@firebase/util";

export function Register() {
  

  const [user, setUser] = useState({
    // userName:"",
    email: "",
    password: "",
  });
  const {signUp} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => { //para cambiar o actualizar el estado
    setUser({ ...user, [name]: value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') //está vacío para que no aparezca hasta que haya un error para mostrar
    try {
      await signUp(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError(error.message); //esto muestra el error de firebase
    }
    
  }

    return (
      <>
        <main className="mainBody">
        {error && <p>{error} </p>} {/* si existe el error va mostrarlo en la etiqueta p */}
        
        <form className="App" onSubmit={handleSubmit}>
        <h1>Enter your data to register</h1>
          <p>User: <input id="nm" name="userName" type="text" placeholder="Name or nickname" ></input></p>
          <p>Email: <input id="mail" name="email" type="email" placeholder="Email that you use" onChange={handleChange}></input></p>
          <p>Password: <input id="pass" name="password" type="password" placeholder="Password" onChange={handleChange}></input></p>
          <p><Link className="links" to="/">↩️</Link> <button id="btn_register" type="submit">Sign in</button></p>
          </form>
        </main>
      </>
    );
  }