// import React, { useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import highchartsTreemap from "highcharts/modules/treemap";

// // Initialize the treemap module
// highchartsTreemap(Highcharts);

// const HighchartTree2 = () => {
//   useEffect(() => {
//     const fetchDataAndRenderChart = async () => {
//       const data = {
//         Asia: {
//           Bangladesh: {
//             name: "Bangladesh",
//             value: 1000,
//           },
//           India: {
//             name: "India",
//             value: 3000,
//           },
//           Pakistan: {
//             name: "Pakistan",
//             value: 1400,
//           },
//         },
//         Europe: {
//           England: {
//             name: "England",
//             value: 1200,
//           },
//           Germany: {
//             name: "Germany",
//             value: 800,
//           },
//           Spain: {
//             name: "Spain",
//             value: 700,
//           },
//         },
//         Africa: {
//           Algeria: {
//             name: "Algeria",
//             value: 1100,
//           },
//           Angola: {
//             name: "Angola",
//             value: 900,
//           },
//         },
//       };

//       let regionP,
//         regionVal,
//         regionI = 0,
//         countryP,
//         countryI,
//         populationP,
//         populationI,
//         region,
//         country,
//         population;

//       const points = [];

//       for (region in data) {
//         if (Object.hasOwnProperty.call(data, region)) {
//           regionVal = 0;
//           regionP = {
//             id: "id_" + regionI,
//             name: region,
//             color: Highcharts.getOptions().colors[regionI],
//           };
//           countryI = 0;
//           for (country in data[region]) {
//             if (Object.hasOwnProperty.call(data[region], country)) {
//               countryP = {
//                 id: regionP.id + "_" + countryI,
//                 name: country,
//                 parent: regionP.id,
//               };
//               points.push(countryP);
//               populationI = 0;
//               for (population in data[region][country]) {
//                 if (
//                   Object.hasOwnProperty.call(data[region][country], population)
//                 ) {
//                   populationP = {
//                     id: countryP.id + "_" + populationI,
//                     name: population,
//                     parent: countryP.id,
//                     value: Math.round(+data[region][country][population]),
//                   };
//                   regionVal += populationP.value;
//                   points.push(populationP);
//                   populationI = populationI + 1;
//                 }
//               }
//               countryI = countryI + 1;
//             }
//           }
//           regionP.value = Math.round(regionVal / countryI);
//           points.push(regionP);
//           regionI = regionI + 1;
//         }
//       }

//       Highcharts.chart("container", {
//         series: [
//           {
//             name: "Regions",
//             type: "treemap",
//             layoutAlgorithm: "squarified",
//             allowDrillToNode: true,
//             animationLimit: 1000,
//             // dataLabels: {
//             //   enabled: false,
//             // },
//             dataLabels: {
//               enabled: true,
//               useHTML: true,
//               align: "left",
//               verticalAlign: "top",
//               y: 20,
//               formatter: function () {
//                 console.log("Formatter Function Executed:", this.point);
//                 return `<table class="table">
//                             <thead>
//                               <tr>
//                                 <th class="px-3">Name</th>
//                                 <th class="px-3">Population</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td class="px-3 font-normal">${this.point.name}</td>
//                                 <td class="px-3 font-normal">${this.point.value}</td>
//                               </tr>
//                             </tbody>
//                           </table>`;
//               },
//             },
//             // dataLabels: {
//             //   enabled: true,
//             //   useHTML: true,
//             //   align: "left",
//             //   verticalAlign: "top",
//             //   y: 20,
//             //   formatter: function () {
//             //     if (this.point.isLeaf) {
//             //       // Display data in table format for final child leaves
//             //       return `<table class="table">
//             //                   <thead>
//             //                     <tr>
//             //                       <th class="px-3">Name</th>
//             //                       <th class="px-3">Population</th>
//             //                     </tr>
//             //                   </thead>
//             //                   <tbody>
//             //                     <tr>
//             //                       <td class="px-3 font-normal">${this.point.name}</td>
//             //                       <td class="px-3 font-normal">${this.point.value}</td>
//             //                     </tr>
//             //                   </tbody>
//             //                 </table>`;
//             //     } else {
//             //       // Only display the name for parent leaves
//             //       return `<div class="parent-leaf">${this.point.name}</div>`;
//             //     }
//             //   },
//             // },
//             levels: [
//               {
//                 level: 1,
//                 dataLabels: {
//                   enabled: true,
//                 },
//                 borderWidth: 3,
//                 levelIsConstant: false,
//               },
//               {
//                 level: 1,
//                 dataLabels: {
//                   style: {
//                     fontSize: "14px",
//                   },
//                 },
//               },
//             ],
//             accessibility: {
//               exposeAsGroupOnly: true,
//             },
//             data: points,
//           },
//         ],
//         subtitle: {
//           text: "Click points to drill down.",
//           align: "left",
//         },
//         title: {
//           text: "Population Distribution by Region",
//           align: "left",
//         },
//       });
//     };

//     fetchDataAndRenderChart();
//   }, []); // Run only once on component mount

//   return <div id="container" />;
// };

// export default HighchartTree2;

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      //   const data = {
      //     Asia: {
      //       Bangladesh: {
      //         population: 1000,
      //       },
      //       India: {
      //         population: 3000,
      //       },
      //       Pakistan: {
      //         population: 1400,
      //       },
      //     },
      //     Europe: {
      //       England: {
      //         population: 1200,
      //       },
      //       Germany: {
      //         population: 800,
      //       },
      //       Spain: {
      //         population: 700,
      //       },
      //     },
      //     Africa: {
      //       Algeria: {
      //         population: 1100,
      //       },
      //       Angola: {
      //         population: 900,
      //       },
      //     },
      //   };

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
          //   regionP.value = Math.round(regionVal / countryI);
          points.push(regionP);
          regionI = regionI + 1;
        }
      }

      Highcharts.chart("container", {
        tooltip: {
          formatter: function () {
            if (!this.point?.node?.children?.length) {
              // Customize tooltip for the specified condition
              return `<p class="font-bold">${this.point?.node?.parentNode?.name}</p>`;
            } else {
              // Use default tooltip for non-leaf nodes
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
                // console.log(this.point.node.parentNode);
                if (!this.point?.node?.children?.length) {
                  return `<div class="bg-white text-blue-400 p-3">
                      <table class="table">
                        <thead>
                            <tr>
                                <th class="px-3">Name</th>
                                <th class="px-3">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr key={item.id}>
                        <td class="px-3 font-normal capitalize">${this.point?.name}</td>
                        <td class="px-3 font-normal">${this.point?.value}</td>
                      </tr>
                        </tbody>
                    </table>
                    </div>`;
                } else {
                  // Return default content for node with child
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
