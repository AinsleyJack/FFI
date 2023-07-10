import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Temporal
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
  // temporal
  const currentDate = new Date();
  const MES = format(currentDate, 'MMMM', { locale: es });
  const YEAR = format(currentDate, 'yyyy'); 
  const DIA2 = format(currentDate, 'ee'); 
const rows = [
  createData(
    0,
    `${DIA2} ${MES}, ${YEAR}`,
    'Elvis Presley',
    'Chinandega',
    'VISA ⠀•••• 3719',
    31,
  ),
  createData(
    1,
    `${DIA2} ${MES}, ${YEAR}`,
    'Paul McCartney',
    'León',
    'VISA ⠀•••• 2574',
    86,
  ),
  createData(2, `${DIA2} ${MES}, ${YEAR}`, 'Tom Scholz', 'Carazo', 'MC ⠀•••• 1253', 10),
  createData(
    3,
    `${DIA2} ${MES}, ${YEAR}`,
    'Michael Jackson',
    'Managua',
    'AMEX ⠀•••• 2000',
    65,
  ),
  createData(
    4,
    `${DIA2} ${MES}, ${YEAR}`,
    'Bruce Springsteen',
    'Rivas',
    'VISA ⠀•••• 5919',
    21,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Encuestas Recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Departamento</TableCell>
            <TableCell>Encuestas</TableCell>
            <TableCell align="right">Numero de Encuestas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>
              <Link color='#709a08' href="#"   sx={{ mt: 3 }}>
              Ver  
              </Link>
                </TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='#709a08' href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver Mas Encuestas
      </Link>
    </React.Fragment>
  );
}
