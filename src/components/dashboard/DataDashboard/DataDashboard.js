import * as React from 'react';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



export const DataDashboard = () => {

    return(
        <>
  <ContainerOption>
      <ContainerOption.OptionItem GridXS={12} GridMD={8} GRidLG={9} PaperSX={{ p:2, display: 'flex', flexDirection: 'column', height: 240,}}>
          <Chart  titulo="Anidaciones en el Año" />
      </ContainerOption.OptionItem>
      <ContainerOption.OptionItem GridXS={12} GridMD={4} GRidLG={3} PaperSX={{ p:2, display: 'flex', flexDirection: 'column', height: 240,}}>
         <Deposits />
      </ContainerOption.OptionItem>
      <ContainerOption.OptionItem GridXS={12} PaperSX={{ p:2, display: 'flex', flexDirection: 'column',}}>
         <Orders TITULO={'Encuestas Recientes'}/>
      </ContainerOption.OptionItem>
  </ContainerOption>
        </>
    );
}; 

function ContainerOption({children}) {
    return(
      <>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {children}
      </Grid>
    <Copyright sx={{ pt: 4 }} />
    </Container>
      </>
    );
  }
  
  function Option({children,GridXS,GridMD,GRidLG,PaperSX}) {
    return(
      <>
      <Grid item xs={GridXS} md={GridMD} lg={GRidLG}>
        <Paper sx={PaperSX} >
          {children}
        </Paper>
      </Grid>
      </>
    );
  }
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  ContainerOption.OptionItem = Option;