import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import barStaticsData from "../../../assets/dummy-data/barStatics";

const BargraphChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={barStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="sales" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BargraphChart;
