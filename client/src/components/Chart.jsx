import { Pie } from "react-chartjs-2";

export default function Chart({ employees }) {
  const data = {};
  employees.forEach(e => {
    e.department.forEach(d => data[d]=(data[d]||0)+1);
  });

  return <Pie data={{
    labels:Object.keys(data),
    datasets:[{data:Object.values(data)}]
  }}/>;
}
