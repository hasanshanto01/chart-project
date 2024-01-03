import React from "react";
import ReactEcharts from "echarts-for-react";

const BarchartWithEchart = () => {
  //   const option = {
  //     xAxis: {
  //       type: "category",
  //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     },
  //     yAxis: {
  //       type: "value",
  //     },
  //     series: [
  //       {
  //         data: [120, 200, 150, 80, 70, 110, 130],
  //         type: "bar",
  //       },
  //     ],
  //   };

  const option = {
    series: [
      {
        type: "treemap",
        data: [
          {
            name: "nodeA",
            value: 10,
            children: [
              {
                name: "nodeAa",
                value: 4,
              },
              {
                name: "nodeAb",
                value: 6,
              },
            ],
          },
          {
            name: "nodeB",
            value: 20,
            children: [
              {
                name: "nodeBa",
                value: 20,
                children: [
                  {
                    name: "nodeBa1",
                    value: 20,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default BarchartWithEchart;
