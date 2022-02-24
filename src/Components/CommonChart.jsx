
import { LineChart, Line,
     XAxis,
      CartesianGrid, Tooltip, 
      Legend, ResponsiveContainer } from 'recharts';


const CommonChart = ({data , datakeyXaxis , datakeyLine }) => {
  return (
     
    <ResponsiveContainer  width="100%" height="90%">
    <LineChart
      data={data}
      margin={{
        top: 0,
        right: 20,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={datakeyXaxis} />
      <Tooltip />
     
      <Line type="monotone" dataKey={datakeyLine} stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>

  )
};

export default CommonChart;