import * as React from 'react';
import Link from '@mui/material/Link';
import { downloadExcel } from 'react-export-table-to-excel'
import { DataGrid,
  gridFilteredSortedRowIdsSelector,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  useGridApiContext,
  gridVisibleColumnFieldsSelector,  } from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem';
import Title from '../Title';

// Temporal
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

  // temporal
  const currentDate = new Date();
  const MES = format(currentDate, 'MMMM', { locale: es });
  const YEAR = format(currentDate, 'yyyy'); 
  const DIA2 = format(currentDate, 'ee'); 

  // temporal
function preventDefault(event) {
  alert(event);
};


const DescargarExcel = (apiRef) => {

  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  const data = filteredSortedRowIds.map((id) => {
    const row = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  const excelColumns = {};
   visibleColumnsField.forEach((column) => {
    excelColumns[column] = {
      label: column,
      value: column,
    }

  });

  const header = visibleColumnsField;
  const body = data;

  downloadExcel({
    fileName: "Encuestas Recientes",
    sheet: "Encuestas Recientes",
    tablePayload: {
      header,
      // accept two different data structures
      body: body || body,
    },
  });

}

function ExcelExportMenuItem() {
  const apiRef = useGridApiContext();

  return (
    <MenuItem
      onClick={() => {
        DescargarExcel(apiRef);
      }}
    >
      Exportar EXCEL
    </MenuItem>
  );
}

function CustomExportButton() {
  return (
    <GridToolbarExportContainer >
      <GridCsvExportMenuItem />
      <ExcelExportMenuItem />
    </GridToolbarExportContainer>
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer >
      <CustomExportButton />
    </GridToolbarContainer>
  );
}

export default function Orders({columns,rows,TITULO}) {
  return (
    <React.Fragment>
      <Title>{TITULO}</Title>

    <div style={{ height:"100%", width:"100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination:{
            paginationModel:{page :0,pageSize :5},
          }
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        autoHeight
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
      <Link color='#709a08' href="#" onClick={preventDefault} sx={{ mt :3 }}>
        Ver Mas Encuestas
      </Link>
    </React.Fragment>
  );
}

Orders.defaultProps = {
  columns: [
    { field: 'id', headerName: 'ID', width: 70},
  { field: 'Fecha', headerName: 'Fecha', width: 200 },
  { field: 'Nombre', headerName: 'Nombre', width: 200 },
  { field: 'Departamento', headerName: 'Departamento', width: 200 },
  { field: 'NEncuestas', headerName: 'Numero de Encuestas', width: 200 },
  {
    field: 'Encuestas',
    headerName: 'Encuestas',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) =>
    <Link color='#709a08' href="#" onClick={() => preventDefault(params.row.id)}>
    Ver
  </Link>
  }
],
rows : [
  { id: 1, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Lannister', Departamento: 'Punta san jose', NEncuestas: 35 },
  { id: 2, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Marti Iniesta', Departamento: 'Jiquilillo', NEncuestas: 35 },
  { id: 3, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Mikel Martínez', Departamento: 'Juan venado', NEncuestas: 35 },
  { id: 4, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Blas Contreras', Departamento: 'chococente', NEncuestas: 35 },
  { id: 5, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Ildefonso Puerto', Departamento: 'La flor', NEncuestas: 35 },
  { id: 6, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Noel de las Heras', Departamento: 'El ostional', NEncuestas: 35 },
  { id: 7, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Cesareo Pardo', Departamento: 'chococente', NEncuestas: 35 },
],
 TITULO:'Encuestas Recientes'
};

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70},
//   { field: 'Fecha', headerName: 'Fecha', width: 200 },
//   { field: 'Nombre', headerName: 'Nombre', width: 200 },
//   { field: 'Departamento', headerName: 'Departamento', width: 200 },
//   { field: 'NEncuestas', headerName: 'Numero de Encuestas', width: 200 },
//   {
//     field: 'Encuestas',
//     headerName: 'Encuestas',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     renderCell: (params) =>
//     <Link color='#709a08' href="#" onClick={() => preventDefault(params.row.id)}>
//     Ver 
//   </Link>
//   },
// ];

// const rows = [
//   { id: 1, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Lannister', Departamento: 'Punta san jose', NEncuestas: 35 },
//   { id: 2, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Marti Iniesta', Departamento: 'Jiquilillo', NEncuestas: 35 },
//   { id: 3, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Mikel Martínez', Departamento: 'Juan venado', NEncuestas: 35 },
//   { id: 3, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Blas Contreras', Departamento: 'chococente', NEncuestas: 35 },
//   { id: 4, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Ildefonso Puerto', Departamento: 'La flor', NEncuestas: 35 },
//   { id: 5, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Noel de las Heras', Departamento: 'El ostional', NEncuestas: 35 },
//   { id: 6, Fecha:`${DIA2}/${MES}/${YEAR}`, Nombre: 'Cesareo Pardo', Departamento: 'chococente', NEncuestas: 35 },
// ];
