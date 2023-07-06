import React, { useState, useEffect } from "react";
import Auth from "./Auth";
import {  Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons'
import fondo from "./MYR-0113-JHO-2048x1363.jpg";

const useStyles = makeStyles((theme) => ({
  // Estilos CSS personalizados
  root: {
    backgroundImage: `url(${fondo})`,
    //backgroundImage:`url("https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '100vh',
  },
  container: {
    opacity: "0.8",
    height: "60%",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
		margin: theme.spacing(1),
		//backgroundColor: theme.palette.primary.main 
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  const AvatarStyle = {backgroundColor:'#00472e'}

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Auth.login(email, password);
      // Realizar acciones adicionales después de la autenticación exitosa, como guardar el token de acceso en el almacenamiento local.
      console.log(response);
    } catch (error) {
      setError("Error de autenticación. Verifica tus credenciales.");
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
         <div className={classes.div}>
         <Avatar className={classes.avatar} style={AvatarStyle}>
               <LockOutlinedIcon/>
          </Avatar>
          <Typography component='h1' variant='h5'>Sign In</Typography>
         <form onSubmit={handleSubmit}  className={classes.form}>
         <TextField
							fullWidth
              required
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Email'
							name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
						/>
          <br />
          <TextField
							fullWidth
              required
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
						/>
          <br />
          {error && <p>{error}</p>}
          <Button
							fullWidth
							variant='contained'
							color='primary'
              type="submit"
							className={classes.button}
						>
							Sign In
						</Button>
        </form>
         </div>
      </Container>
    </Grid>
  );
};

export default LoginForm;
