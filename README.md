# Electron App demoing react-to-print library

A basic Electron React app that uses [react-to-print](https://github.com/gregnb/react-to-print) library to print individual components.

Implementation of `print` method for print-to-react is the crux of the demo. See `handlePrint` method in `App.js`. Also, See `App.css` for CSS print settings.

This uses React function components. If you wish to see the implementation using class components then use branch [class_components](https://github.com/OnkarRuikar/electron-react-to-print-demo/tree/class_components).

## Setup

Download and extract the project. Run following commands in the root dir:

- Run `npm install`

- Run `npm run dev` to start webpack-dev-server. Electron will launch automatically.

### PDF Printers

To test the app following print to PDF printers can be used:
- On Linux use [CUPS-PDF](https://www.cups-pdf.de/download.shtml)
- On Windows use [Microsoft print to PDF](https://pdf.wondershare.com/pdf-knowledge/microsoft-print-to-pdf.html)

---

**Note:** All the dependencies have been updated to the latest versions available on 4th September 2022.

```
❯ npm ls
electron-react-to-print-demo@1.0.0
├── @babel/core@7.18.13
├── @babel/preset-env@7.18.10
├── @babel/preset-react@7.18.6
├── babel-loader@8.2.5
├── concurrently@7.3.0
├── css-loader@6.7.1
├── electron-packager@16.0.0
├── electron@20.1.1
├── file-loader@6.2.0
├── html-webpack-plugin@5.5.0
├── mini-css-extract-plugin@2.6.1
├── react-dom@18.2.0
├── react-to-print@2.14.7
├── react@18.2.0
├── style-loader@3.3.1
├── terser-webpack-plugin@5.3.6
├── wait-on@6.0.1
├── webpack-cli@4.10.0
├── webpack-dev-server@4.10.1
└── webpack@5.74.0
```
