import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createUser } from "../../services/userService";
import Title from '../dashboard/Title';

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email
    };
    createUser(newUser)
      .then(response => {
        console.log("User created:", response.data);
        // Realizar cualquier acción adicional después de crear el usuario
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <React.Fragment>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Title>Crear de Usuario</Title>
      <TextField
          required
          id="outlined-required"
          label="Nombre"    
          color="success"    
          value={name}
          onChange={e => setName(e.target.value)} 
        />
      <TextField
          required
          id="outlined-required"
          label="Nombre de Usuario" 
          color="success"        
        />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          color="success"
        />
      <TextField
          required
          id="outlined-required"
          label="Correo electrónico"
          variant="outlined"
          type="email"
          color="success"   
          fullWidth
          margin="normal"
        
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
      <TextField
           
          id="outlined-required"
          label="URL"    
          color="success"     
        />
    
    </Box>
      </React.Fragment>
        <br />
        <Button color="success"    type="submit" variant="outlined">Crear</Button>
      </form>
    </div>
  );
};

export default UserForm;
