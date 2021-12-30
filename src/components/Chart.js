import * as React from 'react';
import '../assets/css/Chart.css';

//a simple pie chart component which will get printed
export class Chart extends React.Component {
 render() {
  return (
   <div className="chart">
    <h2>Pie Chart</h2>
    <div className="pieContainer">
     <div className="pieBackground"></div>
     <div id="pieSlice1" className="hold">
      <div className="pie"></div>
     </div>
     <div id="pieSlice2" className="hold">
      <div className="pie"></div>
     </div>
     <div id="pieSlice3" className="hold">
      <div className="pie"></div>
     </div>
     <div id="pieSlice4" className="hold">
      <div className="pie"></div>
     </div>
     <div id="pieSlice5" className="hold">
      <div className="pie"></div>
     </div>
     <div id="pieSlice6" className="hold">
      <div className="pie"></div>
     </div>
     <div className="innerCircle">
      <div className="content">
       <b>Data</b>
       <br />
       from Jan, 2022
      </div>
     </div>
    </div>
    <p>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
     Ipsum has been the industry's standard dummy text ever since the 1500s, when an
     unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic
     typesetting, remaining essentially unchanged. It was popularised in the 1960s with
     the release of Letraset sheets containing Lorem Ipsum passages, and more recently
     with desktop publishing software like Aldus PageMaker including versions of Lorem
     Ipsum.
    </p>
   </div>
  );
 }
}
