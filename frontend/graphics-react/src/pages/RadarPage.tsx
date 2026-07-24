import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export const RadarPage = () => {
  return (
    <>
      <h2>Radar</h2>
      <h3>simple</h3>
      <RadarChart
        style={{ width: "100%", height: "100%", aspectRatio: 1 }}
        responsive
        outerRadius="80%"
        data={data}
      >
         <PolarGrid /> {/* cuadricula */}
           <PolarRadiusAxis /> {/* referencia de valores en una line */}a
        <PolarAngleAxis dataKey="subject" /> {/* que se coloca en cada punta */}
        <Radar
        name="alum A"
          dataKey="A" /* se dibuja la forma */
          stroke="#ad9be2"
          fill="#8884d8"
          fillOpacity={0.6}
        ></Radar>
         <Radar name="alum B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> {/* //superposicion  con otro radar*/}
         <Legend></Legend> {/* muestra la propiedad name de radar con stoke indicado */}
      </RadarChart>
    </>
  );
};
