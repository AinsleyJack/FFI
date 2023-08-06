import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../dashboard/Title';
import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";


function preventDefault(event) {
  event.preventDefault();
}

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    <React.Fragment>
      <Title>Lista de Usuario</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Nombre de Usuario</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Detalle</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
              <Link color='#709a08' href="#"   sx={{ mt: 3 }}>
              Ver  
              </Link>
                </TableCell>
              <TableCell align="right">{`${row.website}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='#709a08' href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver Mas Usuarios
      </Link>
    </React.Fragment>
    </div>
  );
};

export default UserList;
