// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

const electronAPI = {
  handleOpenUrl: (callback: any) => ipcRenderer.on("open-url", callback),
  // Database Control
  getLicenseInfo: () => ipcRenderer.invoke("getLicenseInfo"),
  updateLicenseKey: (key: any) => ipcRenderer.invoke("updateLicenseKey", key),
  checkLicenseStatus: () => ipcRenderer.invoke("checkLicense"),
};

contextBridge.exposeInMainWorld("api", electronAPI);

type electronAPIType = typeof electronAPI;
export { electronAPIType };
