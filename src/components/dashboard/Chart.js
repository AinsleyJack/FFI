import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
function getRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

const data = [
  createData('Enero', getRandomValue()),
  createData('Febrero',  getRandomValue()),
  createData('Marzo',  getRandomValue()),
  createData('Abril',  getRandomValue()),
  createData('Mayo',   getRandomValue()),
  createData('Junio',  getRandomValue()),
  createData('Julio', getRandomValue()),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>HOY</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Encuestas
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={'#709a08'}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
