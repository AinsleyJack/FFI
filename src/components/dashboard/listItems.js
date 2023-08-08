import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import StarBorder from '@mui/icons-material/StarBorder';
import { Contexto } from '../../Contexto/Contexto';
import { useContext } from 'react';


export const MainListItems  = () => {
  const {setInfo} = useContext(Contexto);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <React.Fragment>
    <ListItemButton onClick={()=>{setInfo(0)}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Temas" />
    </ListItemButton>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Gestión de usuarios" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl : 4}} onClick={()=>{setInfo(1)}}> 
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Lista de Usuario"/>
          </ListItemButton>
          <ListItemButton sx={{ pl : 4}} onClick={()=>{setInfo(2)}}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="CrearUsuario"/>
          </ListItemButton>

        </List>
    </Collapse>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Informes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
         <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Ajustes" />
    </ListItemButton>
  </React.Fragment>
  );

};



export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    Informes guardados
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Hoy" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mes actual" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Todo el Año" />
    </ListItemButton>
  </React.Fragment>
);
