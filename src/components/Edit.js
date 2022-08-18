import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { FormControl, Input, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();

    const note = doc(db, "notes", id);

    const data = { title: title, description: description };

    await updateDoc(note, data);
    navigate("/notes");
  };

  const getNoteById = async (id) => {
    const note = await getDoc(doc(db, "notes", id));
    if (note.exists()) {
      setTitle(note.data().title);
      setDescription(note.data().description);
    } else {
      console.log("This note doesn't exist");
    }
  };

  useEffect(() => {
    getNoteById(id);
  }, []);
  return (
    <>
      <main className="notesView">
        <div className="bgForm">
          <FormControl className="formCreate" sx={{ m: 6 }} onSubmit={update} >
            <Typography className="titleForm" sx={{ m: 2 }} variant="h4">Write your note</Typography>
            <Input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <Input
              required
              value={description}
              as="textarea"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              id="outlined-multiline-static"
              placeholder="Body"
              label="Multiline"
              multiline
              rows={4}
              className="marginForm" />
            <Button type="submit" variant="contained" color="success" className="btnSave" >💾</Button>
          </FormControl>
        </div>
      </main>
    </>
  )
}
