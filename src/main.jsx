import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { useEffect, useState, useMemo } from "react";
// import ReactDOM from "react-dom";
// import Highcharts from "highcharts";
// import HighchartsData from "highcharts/modules/data";
// import HighchartsExporting from "highcharts/modules/exporting";
// import HighchartsHeatmap from "highcharts/modules/heatmap";
// import HighchartsTreeChart from "highcharts/modules/treemap";
// import HighchartsReact from "highcharts-react-official";

// HighchartsData(Highcharts);
// HighchartsHeatmap(Highcharts);
// HighchartsTreeChart(Highcharts);
// HighchartsExporting(Highcharts);

// const createChartOptions = (points) => ({
//   series: [
//     {
//       type: "treemap",
//       layoutAlgorithm: "squarified",
//       allowDrillToNode: true,
//       animation: false,
//       dataLabels: {
//         enabled: true,
//       },
//       levelIsConstant: false,
//       levels: [
//         {
//           level: 1,
//           dataLabels: {
//             enabled: true,
//           },
//           borderWidth: 3,
//         },
//       ],
//       data: points,
//     },
//   ],
//   title: false,
//   credits: false,
// });

// function App() {
//   const [points, setPoints] = useState([]);
//   const chartOptions = useMemo(() => createChartOptions(points), [points]);
//   useEffect(() => {
//     fetch(
//       "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-mortality.json"
//     )
//       .then((result) => result.json())
//       .then((data) => {
//         var points = [],
//           regionP,
//           regionVal,
//           regionI = 0,
//           countryP,
//           countryI,
//           causeP,
//           causeI,
//           region,
//           country,
//           cause,
//           causeName = {
//             "Communicable & other Group I": "Communicable diseases",
//             "Noncommunicable diseases": "Non-communicable diseases",
//             Injuries: "Injuries",
//           };

//         for (region in data) {
//           if (data.hasOwnProperty(region)) {
//             regionVal = 0;
//             regionP = {
//               id: "id_" + regionI,
//               name: region,
//               color: Highcharts.getOptions().colors[regionI],
//             };
//             countryI = 0;
//             for (country in data[region]) {
//               if (data[region].hasOwnProperty(country)) {
//                 countryP = {
//                   id: regionP.id + "_" + countryI,
//                   name: country,
//                   parent: regionP.id,
//                 };
//                 points.push(countryP);
//                 causeI = 0;
//                 for (cause in data[region][country]) {
//                   if (data[region][country].hasOwnProperty(cause)) {
//                     causeP = {
//                       id: countryP.id + "_" + causeI,
//                       name: causeName[cause],
//                       parent: countryP.id,
//                       value: Math.round(+data[region][country][cause]),
//                     };
//                     regionVal += causeP.value;
//                     points.push(causeP);
//                     causeI = causeI + 1;
//                   }
//                 }
//                 countryI = countryI + 1;
//               }
//             }
//             regionP.value = Math.round(regionVal / countryI);
//             points.push(regionP);
//             regionI = regionI + 1;
//           }
//         }
//         setPoints(points);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
