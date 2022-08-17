import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext.js";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
import {Box, Card, Input} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// import Swal from 'sweetalert2';
// import withReactContent from "sweetaler2-react-content";
const MySwal = withReactContent(Swal)

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export function Notes() {
  const { user, logout } = useAuth()
  const navigate = useNavigate() //para "navegar" entre las rutas de la app

  const [notes, SetNotes] = useState([]) //Configurar hooks
  const notesCollection = collection(db, "catnotes") //referencia a DB firestore
  const getNotes = async () => { //funcion pa mostrar todos los docs desde firestore
    const data = await getDocs(notesCollection)
    SetNotes(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    console.log(notes)
  }
  //funcion eliminar doc
  const deleteNote = async (id) => {
    const noteDoc = doc(db, "catnotes", id)
    await deleteDoc(noteDoc)
    getNotes()
  }

  //funcion sweet alert
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "¿Delete this note?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la funcion para eliminar
        deleteNote(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  //usar useEffect
  useEffect(() => {
    getNotes()
  }, []);


  const handleLogout = async () => { //como viene de signOut, es asíncrona
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <main className="notesView">
        <div className="head">
          <button className="btnLogout" onClick={handleLogout}>Logout</button>
          <h1> Welcome to your cat-notes</h1>
          {notes.map((note) => (
            <div key={note.id}>
              <Card className="cardNote" sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography variant="body2">
                    {note.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button><Link to={'/edit/$note.id'}>✏️</Link></Button>
                  <Button size="small" onClick={() => { confirmDelete(note.id) }}><IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton></Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
