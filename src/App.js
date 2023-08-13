import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Hero from './components/Hero';
import Footer from './components/Footer'
import Dashboard from './components/dashboard/DashBoard';
import { Datos } from './Contexto/Contexto';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <  >
    <Datos>
      <Router>
          <Routes>
          <Route path="/"  element={<><Hero /> <Footer /></>} />
          <Route path="/Login" element={<LoginForm/>} />   
          <Route path="/Dashboard"  element={<Dashboard />}></Route>
          </Routes>
      </Router>
    </Datos>

    </ >
  );
}

export default App;
