import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.js";

export function Notes() {
  const {user, logout} = useAuth()
  const navigate = useNavigate() //para "navegar" entre las rutas de la app

  const handleLogout = async () => { //como viene de signOut, es asíncrona
    try {
      await logout()
      navigate ("/")
    } catch (error) {
      console.error(error);
    } 
  }
  console.log(user)
    return (
      <>
        <main className="notesView">
          <div className="head">
            <button className="btnLogout" onClick={handleLogout}>Logout</button>
            <h1> Welcome to your cat-notes</h1>
          </div>
        </main>
      </>
    );
  }
  