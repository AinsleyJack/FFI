import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import { Button } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Auth.login(email, password);
      // Realizar acciones adicionales después de la autenticación exitosa, como guardar el token de acceso en el almacenamiento local.
    } catch (error) {
      setError('Error de autenticación. Verifica tus credenciales.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <Button variant="contained" color="primary">
        Mi botón MUI
      </Button>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;