import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  type BarRectangleItem,
  type BarShapeProps,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Page C",
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
];

const MyCustomShape = (props: BarShapeProps) => {
  const [isActive, setActive] = useState(false);
  const handleMouseClick = () => setActive((pre) => !pre);
  const fill = isActive ? "blue" : "yellow";
  return (
    <Rectangle {...props} onClick={handleMouseClick} fill={fill}></Rectangle>
  );
};

//x
const formatAxisTick = (value: unknown): string => {
  return `*🫶${value}🫶*`;
};
//label
const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`🌺value: ${value}`}</text>
  );
};
export const BarPage = () => {
  return (
    <>
      <div style={{ margin: "5px", padding: "10px" }}>
        <BarChart width={600} height={300} responsive data={data}>
          <CartesianGrid strokeDasharray="3 3" /> {/* fondo cuadricula */}
          <Tooltip />
          <Legend /> {/*  coloca que valores datakey toma las barras */}
          <XAxis
            dataKey="name"
            tickFormatter={
              formatAxisTick
            } /* (value:any ,index number):string espera tickFormatter */
          ></XAxis>
          <YAxis
            tickFormatter={(value) => `🍄${value}🍄`} //formatea
            label={{
              position: "left",
              value: "Titulo de Y",
              angle: -90,
              dy: 60,
            }}
          ></YAxis>
          <Bar
            dataKey="uv"
            fill="pink" /* color */
            label={renderCustomBarLabel} // funcion q coloca label de esa barra en el medio
          ></Bar>
          <Bar dataKey="pv" fill="orange"></Bar>
        </BarChart>
      </div>

      <br />
      <h2> Customized events</h2>
      <div style={{ margin: "10px" }}>
        <BarChart
          data={data}
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "30vh",
            aspectRatio: 1.618,
          }}
          responsive
        >
          <Legend
            width={100}
            wrapperStyle={{
              top: 40, //mueve legenda de lo que toma la barra
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "3px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          ></Legend>
          <Bar
            barSize={40} /* tam de ancho */
            dataKey="uv"
            onClick={(bri: BarRectangleItem, index, event) => {
              console.log("clicked on", bri, index, event);
            }}
            shape={MyCustomShape}
          ></Bar>
        </BarChart>
      </div>
    </>
  );
};
