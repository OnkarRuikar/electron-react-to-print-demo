import * as React from 'react';
import electron from 'electron';
import ReactToPrint from 'react-to-print';
import { Chart } from '../components/Chart';
import { Bill } from '../components/Bill';
import '../assets/css/App.css';

const BrowserWindow = electron.remote.BrowserWindow;
const ipcRenderer = electron.ipcRenderer;

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

  this.printHereTrigger = () => {
   return <button style={{ marginLeft: '1rem' }}>Print in renderer</button>;
  };

  this.printInMainTrigger = () => {
   return (
    <button style={{ marginLeft: '1rem' }}>Send print request to The Main Process</button>
   );
  };

  // Do all printing in the render process itself
  this.handlePrint_atRendererProcess = function async(target: HTMLIFrameElement) {
   // You can get these options from user showing separate dialog box
   // More options at -
   // https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
   const printOptions = {
    silent: false,
    printBackground: true,
    color: true,
    margin: {
     marginType: 'printableArea',
    },
    landscape: false,
    pagesPerSheet: 1,
    collate: false,
    copies: 1,
    header: 'Page header',
    footer: 'Page footer',
   };

   // as per react-to-print docs need to return promise
   return new Promise(() => {
    console.log('printing in renderer process');
    let win = new BrowserWindow({
     show: false,
     isPrintWindow: true,
     webPreferences: {
      nodeIntegration: true,
     },
    });

    // convert the iframe into data url
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    let data = target.contentWindow.document.documentElement.outerHTML;
    //console.log(data);
    var blob = new Blob([data], { type: 'text/html' });
    var url = URL.createObjectURL(blob);

    // load the data url
    win.loadURL(url);
    win.webContents.on('did-finish-load', () => {
     win.webContents.print(printOptions, (success, failureReason) => {
      console.log('Print Initiated...');
      if (!success) console.log(failureReason);
     });
    });
   });
  };

  // Send print request to the Main process instead of printing in Render process itself
  this.handlePrint_forwardToMainProcess = function async(target: HTMLIFrameElement) {
   return new Promise(() => {
    console.log('forwarding print request to the main process...');

    let data = target.contentWindow.document.documentElement.outerHTML;
    //console.log(data);
    var blob = new Blob([data], { type: 'text/html' });
    var url = URL.createObjectURL(blob);

    ipcRenderer.send('printComponent', url);
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
      trigger={this.printHereTrigger}
      print={this.handlePrint_atRendererProcess}
     />
     <Bill ref={this.setComponent1Ref} />
     <hr />
     <br />
     <ReactToPrint
      content={this.getComponent2Ref}
      documentTitle="Second component"
      trigger={this.printInMainTrigger}
      print={this.handlePrint_forwardToMainProcess}
     />
     <Chart ref={this.setComponent2Ref} color="lightblue" text="Component Two!!" />
    </div>
   </div>
  );
 }
}

export default App;
