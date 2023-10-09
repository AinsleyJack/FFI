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
import specieIcon from '../../media/specie.png';
import { useContexto } from '../../Contexto/Contexto';
import TodayTwoTone from '@mui/icons-material/TodayTwoTone';

export const MainListItems = () => {

  return (
    <React.Fragment >

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Dashboard" icon  = {<DashboardIcon />}/>
     </MenuContainer>

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Especies" icon  = {<img src= {specieIcon} alt="specie"/>}/>
     </MenuContainer>

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Temporadas" icon  = {<TodayTwoTone />}/>
     </MenuContainer>

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Reportes" icon  = { <BarChartIcon />}/>
     </MenuContainer>

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Temas" icon  = {<LayersIcon />}/>
     </MenuContainer>
    
      <MenuContainerCollapse title = "Usuarios" icon  = {<PeopleIcon />}>       
             <MenuContainerCollapse.MenuCollapseItem title = "Lista de Usuario" icon  = { <StarBorder />} menu={1}/>      
             <MenuContainerCollapse.MenuCollapseItem title = "CrearUsuario" icon  = { <StarBorder />} menu={2}/> 
     </MenuContainerCollapse> 

     <MenuContainer menu = {0}>
       <MenuContainer.Item  title = "Ajustes" icon  = {<SettingsIcon />}/>
     </MenuContainer>
    
    </React.Fragment>
  );
};

function MenuContainer ({children,menu}){
  const { oninfo } = useContexto();
  return(
    <>
       <ListItemButton 
       onClick={() => {
         oninfo(menu);
        }}
       >
        {children}
       </ListItemButton>
    </>
  );
}


function MenuItem ({title,icon}){
   return(
    <>
        <ListItemIcon>
           {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
    </>
   );
}


function MenuContainerCollapse ({children,title,icon}){

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return(
    <>
       <ListItemButton onClick={handleClick}>

          <MenuItem title = {title} icon  = {icon}/>
          {open ? <ExpandLess /> : <ExpandMore />}
       </ListItemButton>

       <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
         </List>
      </Collapse>
    </>
  );
}


function MenuCollapseItem ({title,icon,menu}){
  const { oninfo } = useContexto();
   return(
    
        <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
             oninfo(menu);
            }}
          >
        <ListItemIcon>
           {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
          </ListItemButton>
    
   );
}

MenuContainer.Item = MenuItem;
MenuContainerCollapse.MenuCollapseItem = MenuCollapseItem;



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
