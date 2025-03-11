import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'XOPE.io', automatizacion: 90, crecimiento: 85, eficiencia: 88 },
  { name: 'Consultoría A', automatizacion: 70, crecimiento: 65, eficiencia: 75 },
  { name: 'Agencia B', automatizacion: 50, crecimiento: 60, eficiencia: 55 },
  { name: 'Consultoría C', automatizacion: 80, crecimiento: 70, eficiencia: 78 },
  { name: 'Agencia D', automatizacion: 60, crecimiento: 75, eficiencia: 65 }
];

const COLORS = ['teal', 'lightgreen', 'black'];
export default function CompetitiveAnalysisChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="automatizacion" fill="#0088FE" name="Automatización">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[0]} />
          ))}
        </Bar>
        <Bar dataKey="crecimiento" fill="#00C49F" name="Crecimiento">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[1]} />
          ))}
        </Bar>
        <Bar dataKey="eficiencia" fill="#FFBB28" name="Eficiencia Operativa">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[2]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}