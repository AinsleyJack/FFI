import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Hero from './components/Hero';
import Footer from './components/Footer'
import Dashboard from './components/dashboard/DashBoard';
import UserList from "./components/AdminUser/UserList";
import UserForm from "./components/AdminUser/UserForm";


function App() {
  return (
    <  >
    <Dashboard></Dashboard>
      <UserList />
      <UserForm />
      <LoginForm></LoginForm>
      <Hero></Hero>
      <Footer></Footer>
    </ >
  );
}

export default App;
