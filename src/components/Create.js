import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { FormControl, Input, InputLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

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
        <h1>Write your note</h1>
        <FormControl onSubmit={store}>
        <InputLabel htmlFor="my-input">Title</InputLabel>
        <Input id="my-input" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" />
        <InputLabel htmlFor="my-input">Body</InputLabel>
        <Input id="my-input" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text" />
        <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />}></Button>
        </FormControl>
        
      </>
    );
  };