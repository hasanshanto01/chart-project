import AMchart from "./components/Amchart/AMchart";
import AmchartTreemap from "./components/Amchart/AmchartTreemap";
import DrilldownTreemap from "./components/Amchart/DrilldownTreemap";
import BarchartWithEchart from "./components/BarchartWithEchart/BarchartWithEchart";
import EchartOptionQuery from "./components/EchartOptionQuery/EchartOptionQuery";
import ParentLabels from "./components/ParentLabels/ParentLabels";
import DemoTree from "./components/TreemapHighchart/DemoTree";
import HighchartTree from "./components/TreemapHighchart/HighchartTree";
import HighchartTree2 from "./components/TreemapHighchart/HighchartTree2";
import TreemapHighchart from "./components/TreemapHighchart/TreemapHighchart";

function App() {
  return (
    <>
      {/* <BarchartWithEchart /> */}
      {/* <EchartOptionQuery /> */}
      {/* <ParentLabels /> */}
      {/* <TreemapHighchart /> */}
      {/* <HighchartTree /> */}
      {/* <HighchartTree2 /> */}
      <DemoTree />
      {/* <AMchart /> */}
      {/* <DrilldownTreemap /> */}
      {/* <AmchartTreemap /> */}
    </>
  );
}

export default App;

// ${this.point?.node?.parentNode?.children?.map(
//   (item) =>
//     `<tr key={item.id}>
//       <td class="px-3 font-normal capitalize">${item.name}</td>
//       <td class="px-3 font-normal">${item.val}</td>
//     </tr>`
// )}

// ${this.point?.node?.parentNode?.children
//   ?.map(
//     (item) => `<tr key={item.id}>
//         <td class="px-3 font-normal capitalize">${item.name}</td>
//         <td class="px-3 font-normal">${item.val}</td>
//       </tr>`
//   )
//   .join("")}
