import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsTreemap from "highcharts/modules/treemap";

// Initialize the treemap module
highchartsTreemap(Highcharts);

const TreeMapChart = () => {
  const data = {
    Asia: {
      Bangladesh: {
        population: 1000,
      },
      India: {
        population: 3000,
      },
      Pakistan: {
        population: 1400,
      },
    },
    Europe: {
      England: {
        population: 1200,
      },
      Germany: {
        population: 800,
      },
      Spain: {
        population: 700,
      },
    },
    Africa: {
      Algeria: {
        population: 1100,
      },
      Angola: {
        population: 900,
      },
    },
  };

  const tableData = [
    {
      name: "Bangladesh",
      details: [
        { population: 1000 },
        { area: 7 },
        { reserve: 200 },
        { level: 3 },
      ],
    },
    {
      name: "India",
      details: [
        { population: 3000 },
        { area: 4 },
        { reserve: 150 },
        { level: 2 },
      ],
    },
    {
      name: "Pakistan",
      details: [
        { population: 1400 },
        { area: 5 },
        { reserve: 100 },
        { level: 3 },
      ],
    },
    {
      name: "England",
      details: [
        { population: 1200 },
        { area: 3 },
        { reserve: 50 },
        { level: 2 },
      ],
    },
    {
      name: "Germany",
      details: [
        { population: 800 },
        { area: 5 },
        { reserve: 70 },
        { level: 2 },
      ],
    },
    {
      name: "Spain",
      details: [
        { population: 700 },
        { area: 6 },
        { reserve: 90 },
        { level: 2 },
      ],
    },
    {
      name: "Algeria",
      details: [
        { population: 1100 },
        { area: 8 },
        { reserve: 80 },
        { level: 3 },
      ],
    },
    {
      name: "Angola",
      details: [
        { population: 900 },
        { area: 9 },
        { reserve: 60 },
        { level: 3 },
      ],
    },
  ];

  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      let regionP,
        regionVal,
        regionI = 0,
        countryP,
        countryI,
        populationP,
        populationI,
        region,
        country,
        population;

      const points = [];

      for (region in data) {
        if (Object.hasOwnProperty.call(data, region)) {
          regionVal = 0;
          regionP = {
            id: "id_" + regionI,
            name: region,
            color: Highcharts.getOptions().colors[regionI],
          };
          countryI = 0;
          for (country in data[region]) {
            if (Object.hasOwnProperty.call(data[region], country)) {
              countryP = {
                id: regionP.id + "_" + countryI,
                name: country,
                parent: regionP.id,
              };
              points.push(countryP);
              populationI = 0;
              for (population in data[region][country]) {
                if (
                  Object.hasOwnProperty.call(data[region][country], population)
                ) {
                  populationP = {
                    id: countryP.id + "_" + populationI,
                    name: population,
                    parent: countryP.id,
                    value: Math.round(+data[region][country][population]),
                  };
                  regionVal += populationP.value;
                  points.push(populationP);
                  populationI = populationI + 1;
                }
              }
              countryI = countryI + 1;
            }
          }
          points.push(regionP);
          regionI = regionI + 1;
        }
      }

      Highcharts.chart("container", {
        tooltip: {
          formatter: function () {
            if (!this.point?.node?.children?.length) {
              return `<p class="font-bold">${this.point?.node?.parentNode?.name}</p>`;
            } else {
              return `<p class="font-bold">${this.point.name}</p>`;
            }
          },
        },
        series: [
          {
            name: "Regions",
            type: "treemap",
            layoutAlgorithm: "squarified",
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
              enabled: false,
              useHTML: true,
              align: "left",
              verticalAlign: "top",
              x: 20,
              y: 20,
              formatter: function () {
                if (!this.point?.node?.children?.length) {
                  const matchedItem = tableData.find(
                    (item) =>
                      item?.name.toLowerCase() ===
                      this.point?.node?.parentNode?.name.toLowerCase()
                  );
                  if (matchedItem) {
                    return `<div class="bg-white text-blue-400 p-3">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class="px-3">Name</th>
                            <th class="px-3">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${matchedItem.details
                            .map(
                              (detail, index) =>
                                `<tr key={index}>
                                <td class="px-3 font-normal capitalize">
                                  ${Object.keys(detail)[0]}
                                </td>
                                <td class="px-3 font-normal">
                                  ${Object.values(detail)[0]}
                                </td>
                              </tr>`
                            )
                            .join("")}
                        </tbody>
                      </table>
                    </div>`;
                  }
                } else {
                  return this.point?.name;
                }
              },
            },
            levels: [
              {
                level: 1,
                dataLabels: {
                  enabled: true,
                },
                borderWidth: 3,
                levelIsConstant: false,
              },
              {
                level: 1,
                dataLabels: {
                  style: {
                    fontSize: "14px",
                  },
                },
              },
            ],
            accessibility: {
              exposeAsGroupOnly: true,
            },
            data: points,
          },
        ],
        subtitle: {
          text: "Click to drill down.",
          align: "left",
        },
        title: {
          text: "Tree Map",
          align: "left",
        },
      });
    };

    fetchDataAndRenderChart();
  }, []); // Run only once on component mount

  return <div id="container" />;
};

export default TreeMapChart;
