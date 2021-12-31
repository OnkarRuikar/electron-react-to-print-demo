# Electron App demoing react-to-print library use

A basic Electron React app that uses [react-to-print](https://github.com/gregnb/react-to-print) library to print individual components.

Implementation of `print` method for print-to-react is the crux of the demo. See `handlePrint` method in App.js. Also, See App.css for CSS print settings.

### To get started:

Download and extract the project. Run following command in root dir:

- Run `npm install`

##### Development

- Run `npm run dev` to start webpack-dev-server. Electron will launch automatically.

---

**Note:** Updated all dependencies to latest versions available on 1st Jan, 2022:

```
electron-react-to-print-demo@0.0.0
| Electron App demoing react-to-print library use
+-- @babel/core@7.16.7
|
+-- @babel/preset-env@7.16.7
|
+-- @babel/preset-react@7.16.7
|
+-- babel-loader@8.2.3
|
+-- concurrently@6.5.1
|
+-- css-loader@6.5.1
|
+-- electron-packager@15.4.0
|
+-- electron@16.0.5
|
+-- file-loader@6.2.0
|
+-- html-webpack-plugin@5.5.0
|
+-- mini-css-extract-plugin@2.4.5
|
+-- react-dom@17.0.2
|
+-- react-to-print@2.14.3
|
+-- react@17.0.2
|
+-- style-loader@3.3.1
|
+-- terser-webpack-plugin@5.3.0
|
+-- wait-on@6.0.0
|
+-- webpack-cli@4.9.1
|
+-- webpack-dev-server@4.7.2
|
`-- webpack@5.65.0
```
