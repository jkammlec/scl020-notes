import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { FormControl, Input, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';

export const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
  
    const notesCollection = collection(db, "notes");
  
    const store = async (e) => {
      e.preventDefault();
  
      await addDoc(notesCollection, {
        title: title,
        description: description,
      });
      navigate("/notes");
    };
  
    return (
      <>
        <main className="notesView">
        <div className="bgForm">
        <FormControl className="formCreate" sx={{ m: 6 }} onSubmit={store} >
        <Typography className="titleForm" sx={{ m: 2 }} variant="h4">Write your note</Typography>
        <Input 
        required value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        placeholder="Title"
        className="marginForm"
        /> 
        <Input  
        required value={description}
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
    );
  };