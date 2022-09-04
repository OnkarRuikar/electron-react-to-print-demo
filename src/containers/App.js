import React, {createRef} from "react";
import {useReactToPrint} from "react-to-print";
import {Chart} from "../components/Chart";
import {Bill} from "../components/Bill";
import "../assets/css/App.css";

export function App() {

  const billRef = createRef();
  const chartRef = createRef();

  // Send print request to the Main process
  const handlePrint = function (target) {
    return new Promise(() => {
      console.log("forwarding print request to the main process...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      //console.log(data);
      const blob = new Blob([data], {type: "text/html"});
      const url = URL.createObjectURL(blob);

      window.electronAPI.printComponent(url, (response) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };

  // Send print preview request to the Main process
  const handlePreview = function (target) {
    return new Promise(() => {
      console.log("forwarding print preview request...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      //console.log(data);
      const blob = new Blob([data], {type: "text/html"});
      const url = URL.createObjectURL(blob);

      window.electronAPI.previewComponent(url, (response) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };


  const handleBillPrint = useReactToPrint({
    content: () => billRef.current,
    documentTitle: "Bill component",
    print: handlePrint,
  });

  const handleBillPreview = useReactToPrint({
    content: () => billRef.current,
    documentTitle: "Bill component",
    print: handlePreview,
  });

  const handleChartPrint = useReactToPrint({
    content: () => chartRef.current,
    documentTitle: "Chart component",
    print: handlePrint,
  });

  const handleChartPreview = useReactToPrint({
    content: () => chartRef.current,
    documentTitle: "Chart component",
    print: handlePreview,
  });

  return (
      <div className="App">
        <h1>Electron react-to-print demo</h1>
        <p>Print individual components by clicking print button above them.</p>
        <div style={{height: "50vh", width: "80vw"}}>
          <hr/>
          <br/>
          <span>
            <button
                onClick={handleBillPrint}
                style={{marginLeft: "1rem"}}>Print </button>
            <button
                onClick={handleBillPreview}
                style={{marginLeft: "1rem"}}>Preview </button>
          </span>
          <Bill ref={billRef}/>
          <hr/>
          <br/>

          <span>
            <button
                onClick={handleChartPrint}
                style={{marginLeft: "1rem"}}>Print </button>
            <button
                onClick={handleChartPreview}
                style={{marginLeft: "1rem"}}>Preview </button>
          </span>
          <Chart ref={chartRef} color="lightblue"
                 text="Component Two!!"/>
        </div>
      </div>
  );
}

export default App;
