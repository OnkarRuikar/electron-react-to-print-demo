# Electron App demoing react-to-print library use

A basic Electron React app that uses [react-to-print](https://github.com/gregnb/react-to-print) library to print individual components.

Implementation of `print` method for print-to-react is the crux of the demo. See `handlePrint_atRendererProcess` and `handlePrint_forwardToMainProcess` methods in App.js. 
Also, See App.css for CSS print settings.

The demo is built on [basic-electron-react-boilerplate](https://github.com/pbarbiero/basic-electron-react-boilerplate).

### To get started:

Download and extract the project. Run following command in root dir:

- Run `npm install`

##### Development

- Run `npm run dev` to start webpack-dev-server. Electron will launch automatically.
