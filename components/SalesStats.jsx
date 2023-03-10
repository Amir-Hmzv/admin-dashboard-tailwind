import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const SalesStats = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const data = [
    {
      name: "January",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Febraury",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Julay",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full h-[60vh]">
      <h2 className="mt-5 mb-3 text-primary font-bold text-xl">
        Sales statistics
      </h2>

      {domLoaded && (
        <ResponsiveContainer width={"100%"} height="80%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 0, right: 30, left: 0, bottom: 45 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" style={{ fontSize: ".8rem", fill: "#aaa" }} />
            <YAxis />
            <CartesianGrid
              strokeDasharray="1 1"
              style={{ stroke: "rgba(2, 2, 2, 0.2)" }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SalesStats;
