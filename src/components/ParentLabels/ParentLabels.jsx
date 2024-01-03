import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

const ParentLabels = () => {
  const [data, setData] = useState({
    children: [
      {
        name: "Asia",
        keyword: "Continent",
        children: [
          {
            name: "Bangladesh",
            keyword: "Country",
            children: [
              {
                name: "Dhaka",
                value: 10,
                keyword: "City",
              },
              {
                name: "Rajshahi",
                value: 5,
                keyword: "City",
              },
              {
                name: "Sylhet",
                value: 8,
                keyword: "City",
              },
            ],
          },
          {
            name: "India",
            keyword: "Country",
            children: [
              {
                name: "Delhi",
                value: 10,
                keyword: "City",
              },
              {
                name: "Mumbai",
                value: 20,
                keyword: "City",
              },
            ],
          },
          {
            name: "Pakistan",
            value: 20,
            keyword: "Country",
          },
        ],
      },
      {
        name: "Europe",
        keyword: "Continent",
        children: [
          {
            name: "England",
            value: 15,
            keyword: "Country",
          },
          {
            name: "Germany",
            value: 25,
            keyword: "Country",
          },
        ],
      },
      {
        name: "North America",
        keyword: "Continent",
        children: [
          {
            name: "United States",
            value: 18,
            keyword: "Country",
          },
          {
            name: "Canada",
            value: 32,
            keyword: "Country",
          },
        ],
      },
    ],
  });

  const getLevelOption = () => {
    return [
      {
        itemStyle: {
          borderColor: "#777",
          borderWidth: 0,
          gapWidth: 1,
        },
        upperLabel: {
          show: true,
        },
      },
      {
        itemStyle: {
          borderColor: "#555",
          borderWidth: 5,
          gapWidth: 1,
        },
        emphasis: {
          itemStyle: {
            borderColor: "#ddd",
          },
        },
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];
  };

  const option = {
    title: {
      text: "Drill Down Tree Map",
      subtext: "Option query",
      left: "center",
    },
    // tooltip: {},
    tooltip: {
      formatter: function (params) {
        console.log("tooltip===", params);
        // Customize the tooltip content here
        return `<p class="font-bold">Name: ${params.name}</p>
          <p>Value: ${params.value}</p>
          <small>Keyword: ${params.data.keyword}</small>`;
      },
    },
    series: [
      {
        name: "Disk Usage",
        type: "treemap",
        visibleMin: 300,
        label: {
          show: true,
          formatter: "{b}",
        },
        upperLabel: {
          show: true,
          height: 30,
        },
        itemStyle: {
          borderColor: "#fff",
        },
        levels: getLevelOption(),
        data: data.children,
      },
    ],
  };

  return (
    <div className="my-10">
      <ReactEcharts option={option} />
    </div>
  );
};

export default ParentLabels;
