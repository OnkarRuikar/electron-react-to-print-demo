const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
 printComponent: async (url, callback) => {
  let response = await ipcRenderer.invoke('printComponent', url);
  callback(response);
 },
});
