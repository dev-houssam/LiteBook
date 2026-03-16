const path = require("path")

module.exports = function(app){

  app.get("/download-litebook/:name",(req,res)=>{

    const name = req.params.name

    const file = path.join(
      __dirname,
      "../../books",
      name + ".litebook.zip"
    )

    res.download(file)

  })

}