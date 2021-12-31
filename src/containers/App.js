import * as React from 'react';
import ReactToPrint from 'react-to-print';
import { Chart } from '../components/Chart';
import { Bill } from '../components/Bill';
import '../assets/css/App.css';

export class App extends React.PureComponent {
 constructor(props) {
  super(props);

  this.component1Ref = null;
  this.component2Ref = null;

  this.setComponent1Ref = (ref) => {
   this.component1Ref = ref;
  };
  this.setComponent2Ref = (ref) => {
   this.component2Ref = ref;
  };

  this.getComponent1Ref = () => {
   return this.component1Ref;
  };
  this.getComponent2Ref = () => {
   return this.component2Ref;
  };

  this.printTrigger = () => {
   return <button style={{ marginLeft: '1rem' }}>Print </button>;
  };

  // Send print request to the Main process
  this.handlePrint = function (target) {
   return new Promise(() => {
    console.log('forwarding print request to the main process...');

    let data = target.contentWindow.document.documentElement.outerHTML;
    //console.log(data);
    var blob = new Blob([data], { type: 'text/html' });
    var url = URL.createObjectURL(blob);

    window.electronAPI.printComponent(url, (response) => {
     console.log('Main: ', response);
    });
    //console.log('Main: ', data);
   });
  };
 }

 render() {
  return (
   <div className="App">
    <h1>Electron react-to-print demo</h1>
    <p>Print individual components by clicking print button above them.</p>
    <div style={{ height: '50vh', width: '80vw' }}>
     <hr />
     <br />
     <ReactToPrint
      content={this.getComponent1Ref}
      documentTitle="First component"
      trigger={this.printTrigger}
      print={this.handlePrint}
     />
     <Bill ref={this.setComponent1Ref} />
     <hr />
     <br />
     <ReactToPrint
      content={this.getComponent2Ref}
      documentTitle="Second component"
      trigger={this.printTrigger}
      print={this.handlePrint}
     />
     <Chart ref={this.setComponent2Ref} color="lightblue" text="Component Two!!" />
    </div>
   </div>
  );
 }
}

export default App;
