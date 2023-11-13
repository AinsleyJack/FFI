import * as React from 'react';
import Title from '../Title';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as Title2,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title2,
  Tooltip,
  Legend
);



const labels = ['Padre Ramos', 'ASERRADORES', 'RN Volcan Cosiguina', 'RN Estero Padre Ramos', 'RN Juan venado', 'RN Chacocente', 'La Flor'];


export default function Chart({options,data,titulo}) {
  return (
    <React.Fragment >
      <Title>{titulo}</Title>     
      <div style={{ width: '100%', height: '100%' }}><Line options={options} data={data}/></div>
    </React.Fragment>
  );
}

Chart.defaultProps={
  options : {
    responsive: true,
    maintainAspectRatio: false, // Desactiva el mantenimiento automático del aspecto
    aspectRatio: '1200 / 500', // Establece el aspecto del gráfico utilizando px
    plugins: {
      legend: {
        position: 'top',
      }
    },
  },
  data : {
    labels,
    datasets: [
      {
        label: 'Carey',
        data: labels.map(() => Math.floor(Math.random() * 200) + 1),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Tora',
        data: labels.map(() => Math.floor(Math.random() * 200) + 1),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  },
  titulo : 'HOY'
}
