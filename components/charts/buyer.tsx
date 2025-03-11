import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
    ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { name: 'Startups tecnológicas', value: 400 },
    { name: 'Fintech y blockchain', value: 300 },
    { name: 'Departamentos de innovación', value: 300 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  
  export default function MyPieChart() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }