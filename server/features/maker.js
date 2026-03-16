module.exports = function(app){

  app.post("/api/maker/build",(req,res)=>{

    const config = req.body

    console.log("📦 Building LiteBook", config.title)

    // futur builder

    res.json({
      status:"building",
      book:config.title
    })

  })

}