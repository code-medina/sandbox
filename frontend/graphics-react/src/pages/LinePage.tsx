import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const LinePage = () => {
  //data
  const data = [
    {
      amt: 1400,
      name: "Page A",
      pv: 800,
      uv: 590,
    },
    {
      amt: 1400,
      name: "Page B",
      pv: 800,
      uv: 590,
    },
    {
      amt: 1506,
      name: "Page C",
      pv: 967,
      uv: 868,
    },
    {
      amt: 989,
      name: "Page D",
      pv: 1098,
      uv: 1397,
    },
    {
      amt: 1228,
      name: "Page E",
      pv: 1200,
      uv: 1480,
    },
    {
      amt: 1100,
      name: "Page F",
      pv: 1108,
      uv: 1520,
    },
  ];
  //custom legend eje X
  const CustomTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <text x={x} y={y} dy={16} textAnchor="middle" fill="red">
        {payload.value.toUpperCase()}
      </text>
    );
  };
  //custom dot
  const CustomizedDot = (props) => {
    const { cx, cy, payload, value } = props;

    // Apply a custom red dot if the value is over 500
    if (value > 500) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={8}
          fill="green"
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }

    // Fallback to the regular dot for other points
    return <circle cx={cx} cy={cy} r={4} fill="#fcec0c" />;
  };

  return (
    <>
      <h2>Line</h2>

      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={data}
      >
        <CartesianGrid /> {/* cuadrilla */}
        <Line
          dataKey="uv"
          dot={CustomizedDot}
          strokeWidth={2}
          name="nombre de la linea que va en legand"
        />
        <Line
          dataKey="pv"
          strokeWidth={2}
          stroke="#8884d8" /* linea -- */
          strokeDasharray="5 5"
          name="nombre de la 2 linea que va en legand"
        />
        {/* que se dibuja */}
        <XAxis dataKey="name" tick={CustomTick} height={50} />
        {/* sobre eje x que q referencia */}
        <YAxis
          width="auto"
          label={{ value: "UV", position: "insideLeft", angle: -90 }}
        />
        {/* eje vertical legenda */}
        <Legend position="bottom" />{" "}
        {/* indica posicion de la referencia de la linea */}
        <Tooltip />
      </LineChart>
    </>
  );
};
