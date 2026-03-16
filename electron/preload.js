const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("api", {

  readFile(path){
    return ipcRenderer.invoke("read-file", path)
  },

  openLiteBook(){
    return ipcRenderer.invoke("open-litebook")
  }

})