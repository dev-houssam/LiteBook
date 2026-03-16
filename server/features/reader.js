const fs = require("fs")
const path = require("path")

module.exports = function(app){

  // liste des livres
  app.get("/api/books", (req,res)=>{

    const booksDir = path.join(__dirname, "../../books")

    const books = fs.readdirSync(booksDir)
      .filter(b => b.endsWith(".litebook"))

    res.json({
      books
    })

  })

}