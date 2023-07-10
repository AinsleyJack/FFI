import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const currentDate = new Date();
  const DIA = format(currentDate, 'EEEE', { locale: es });
  const MES = format(currentDate, 'MMMM', { locale: es });
  const YEAR = format(currentDate, 'yyyy'); 
  const DIA2 = format(currentDate, 'ee'); 
  return (
    <React.Fragment>
      <Title>Encuestas Recientes</Title>
      <Typography component="p" variant="h4">
        50
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {`${DIA}, ${DIA2} de ${MES} de ${YEAR}`}
      </Typography>
      <div>
        <Link color='#709a08' href="#" onClick={preventDefault}>
          Ver Encuestas
        </Link>
      </div>
    </React.Fragment>
  );
}
