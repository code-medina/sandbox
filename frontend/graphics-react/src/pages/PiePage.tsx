import { Pie, PieChart, Tooltip } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 590,
  },
  {
    name: "Page B",
    uv: 560,
  },
  {
    name: "Page C",
    uv: 30,
  },
  {
    name: "Page D",
    uv: 800,
  },
  {
    name: "Page E",
    uv: 68,
  },
];

const dataWithColor = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

export const PiePage = () => {
  return (
    <>
      <h2>Pie chart</h2>
      <h3>simple</h3>
      <PieChart width={400} height={400} responsive>
        <Pie data={data} dataKey="uv" cx="50%" cy="50%"></Pie>
        <Tooltip defaultIndex={2}></Tooltip>
      </PieChart>
      <br />
      <h3>Angle</h3>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 2,
        }}
        responsive
      >
        <Pie
          dataKey="uv"
          cx="50%"
          cy="100%"
          data={data}
          label
          startAngle={180}
          endAngle={0}
          outerRadius="120%"
        ></Pie>
        <Tooltip></Tooltip>
      </PieChart>
      <br />
      <h3>rounded</h3>
      <PieChart width={500} height={500}>
        <Pie
          data={dataWithColor}
          innerRadius="80%"
          outerRadius="100%"
          dataKey="value"
            // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          //paddin angle is the gap between ech pie slice
          paddingAngle={10}
          
        ></Pie>
      </PieChart>
    </>
  );
};
