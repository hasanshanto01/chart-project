import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

const EchartOptionQuery = () => {
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
                children: [
                  {
                    name: "Dhaka",
                    value: 10,
                    keyword: "City",
                  },
                ],
              },
              {
                name: "Rajshahi",
                value: 5,
                keyword: "City",
                children: [
                  {
                    name: "Rajshahi",
                    value: 5,
                    keyword: "City",
                  },
                ],
              },
              {
                name: "Sylhet",
                value: 8,
                keyword: "City",
                children: [
                  {
                    name: "Sylhet",
                    value: 8,
                    keyword: "City",
                  },
                ],
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

  const option = {
    title: {
      text: "Drill Down Tree Map",
      subtext: "Option query",
      left: "leafDepth",
    },
    // tooltip: {},
    // tooltip: {
    //   formatter: function (params) {
    //     console.log("tooltip===", params);
    //     // Customize the tooltip content here
    //     return `<p class="font-bold">Name: ${params.name}</p>
    //       <p>Value: ${params.value}</p>
    //       <small>Keyword: ${params.data.keyword}</small>`;
    //   },
    // },
    tooltip: {
      formatter: function (params) {
        console.log("tooltip===", params);
        // Customize the tooltip content here
        return `
        <table class="table-auto">
            <thead>
                <tr>
                <th class="px-2">Name</th>
                <th class="px-2">Value</th>
                <th class="px-2">Keyword</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="px-2">${params.name}</td>
                <td class="px-2">${params.value}</td>
                <td class="px-2">${params.data.keyword}</td>
                </tr>
            </tbody>
        </table>
        `;
      },
    },
    series: [
      {
        name: "option",
        type: "treemap",
        visibleMin: 300,
        data: data.children,
        leafDepth: 1,
        upperLabel: {
          show: true,
          height: 30,
        },
        itemStyle: {
          borderColor: "#fff",
        },
        levels: [
          {
            itemStyle: {
              borderColor: "#555",
              borderWidth: 4,
              gapWidth: 4,
            },
          },
          {
            colorSaturation: [0.3, 0.6],
            itemStyle: {
              borderColorSaturation: 0.7,
              gapWidth: 2,
              borderWidth: 2,
            },
          },
          {
            colorSaturation: [0.3, 0.5],
            itemStyle: {
              borderColorSaturation: 0.6,
              gapWidth: 1,
            },
          },
          {
            colorSaturation: [0.3, 0.5],
          },
        ],
        // Formatter function to customize node content
        label: {
          formatter: function (params) {
            return `{a|Name:} {b|${params.name}}\n{a|Value:} {b|${params.value}}`;
          },
          color: "#333",
          fontSize: 12,
          fontFamily: "Arial",
          lineHeight: 20,
          rich: {
            a: {
              color: "#999",
              fontSize: 10,
              fontWeight: "bold",
            },
            b: {
              color: "#333",
              fontSize: 12,
            },
          },
        },
        // label: {
        //   formatter: function (params) {
        //     // console.log("label===", params);
        //     return `${params.name}, ${params.value}`;
        //   },
        // },
      },
    ],
  };

  return (
    <div className="my-10">
      <ReactEcharts option={option} />
    </div>
  );
};

export default EchartOptionQuery;
