const { ipcMain, dialog } = require("electron")
const fs = require("fs")
const path = require("path")

module.exports = function(){

  /*
  Ouvrir un dossier .litebook
  */

  ipcMain.handle("open-litebook", async ()=>{

    const result = await dialog.showOpenDialog({
      properties:["openDirectory"]
    })

    if(result.canceled) return null

    return result.filePaths[0]

  })


  /*
  Lire un fichier
  */

  ipcMain.handle("read-file", (event, filePath)=>{

    console.log("📂 reading file:", filePath)

    return fs.readFileSync(filePath,"utf8")

  })


  /*
  Créer un LiteBook (Maker futur)
  */

  ipcMain.handle("litebook:create", async (event,config)=>{

    console.log("📚 Creating LiteBook:", config)

    return {
      status:"ok"
    }

  })


  /*
  Télécharger un LiteBook (Archive)
  */

  ipcMain.handle("litebook:download", async (event,name)=>{

    const url = `http://localhost:9955/download-litebook/${name}`

    return url

  })

  /*
  Afficher Le menu (All activities)
  */

  ipcMain.handle("litebook:home", async (event,name)=>{

    const url = `http://localhost:9955/home`

    return url

  })

  ipcMain.handle("litebook:my-litebooks", async (event,name)=>{

    const url = `http://localhost:9955/my-litebooks`

    return url

  })

}