import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import { Grid,Container, Paper, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
//import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons'
//import fondo from './MYR.jpg';

const useStyles = makeStyles((theme) => ({
  // Estilos CSS personalizados
  root: {
    //backgroundImage: `url(${fondo})`,
    backgroundImage:`url("https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg")`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container:{
    opacity: '0.6',
    height:'60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      height:'100%'
    }
  },
  form:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}));

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const classes = useStyles();

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
    <Grid container component='main' className={useStyles.root}  style={{ 
      backgroundImage: `url("https://www.fauna-flora.org/app/uploads/2023/06/burmese-soft-shelled-turtle-MYR-0113-JHO-1.jpg")` ,
      backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     height: '100vh',
     backgroundPosition: 'center',
 }}>

<Container component={Paper} elevation={5} maxWidth='xs'  className={useStyles.container} style={{ height:'60%',marginTop : '80px', opacity: '0.6'}}>

<form onSubmit={handleSubmit} className={useStyles.form} style={{
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
}}>
  <Avatar>
 
  </Avatar>
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
      
</Container>

    </Grid>

  );
};

export default LoginForm;
