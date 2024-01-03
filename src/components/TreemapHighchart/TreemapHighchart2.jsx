import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsTreemap from "highcharts/modules/treemap";
import HighchartsAccessibility from "highcharts/modules/accessibility";

HighchartsTreemap(Highcharts);
HighchartsAccessibility(Highcharts);

const TreemapHighchart = () => {
  const demoData = [
    {
      id: "1.1",
      parent: "0.0",
      name: "The World",
    },
    {
      id: "2.1",
      parent: "1.1",
      name: "Asia",
    },
    {
      id: "2.2",
      parent: "1.1",
      name: "Europe",
      value: 30,
    },
    {
      id: "3.4",
      parent: "2.2",
      name: "Europe",
      value: 30,
    },
    {
      id: "2.3",
      parent: "1.1",
      name: "North America",
      value: 25,
    },
    {
      id: "3.5",
      parent: "2.3",
      name: "North America",
      value: 25,
    },

    // *****Asia*****
    {
      id: "3.1",
      parent: "2.1",
      name: "Bangladesh",
    },
    {
      id: "4.1",
      parent: "3.1",
      name: "Bangladesh",
      value: 10,
    },
    {
      id: "3.2",
      parent: "2.1",
      name: "India",
    },
    {
      id: "4.2",
      parent: "3.2",
      name: "India",
      value: 30,
    },
    {
      id: "3.3",
      parent: "2.1",
      name: "Pakistan",
    },
    {
      id: "4.3",
      parent: "3.3",
      name: "Pakistan",
      value: 40,
    },
    // *****Asia*****
  ];

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        // breadcrumbs: {
        //   showFullPath: true,
        // },
        type: "treemap",
        layoutAlgorithm: "squarified",
        allowDrillToNode: true,
        animationLimit: 1000,
        dataLabels: {
          enabled: true,
          useHTML: true,
          align: "left",
          verticalAlign: "top",
          y: 20,
          //   formatter: function () {
          //     console.log("Clicked point:", this.point);
          //     return `<table class="table">
          //                  <thead>
          //                     <tr>
          //                         <th class="px-3">Name</th>
          //                         <th class="px-3">Value</th>

          //                     </tr>
          //                 </thead>
          //                  <tbody>
          //                     <tr>
          //                         <td class="px-3 font-normal">${this.point.name}</td>
          //                         <td class="px-3 font-normal">${this.point.value}</td>
          //                      </tr>
          //                 </tbody>
          //               </table>`;
          //   },

          formatter: function () {
            // Check if it is a leaf node (no children)
            if (
              !this.point.node.children ||
              this.point.node.children.length === 0
            ) {
              // Customize labels for leaf nodes (last level)
              return `<table class="table">
                          <thead>
                              <tr>
                                  <th class="px-3">Name</th>
                                  <th class="px-3">Value</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="px-3 font-normal">${this.point.name}</td>
                                  <td class="px-3 font-normal">${this.point.value}</td>
                              </tr>
                          </tbody>
                      </table>`;
            } else {
              // Default labels for nodes with children
              return `${this.point.name}`;
            }
          },
        },
        levels: [
          {
            level: 1,
            dataLabels: {
              enabled: true,
            },
            borderWidth: 5,
            levelIsConstant: false,
          },
          {
            level: 2,
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
        data: demoData,
      },
    ],
  };

  return (
    <div className="my-10">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TreemapHighchart;
