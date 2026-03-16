const fs = require("fs")
const path = require("path")

module.exports = function(app){

  const featuresPath = path.join(__dirname, "features")

  const files = fs.readdirSync(featuresPath)

  files.forEach(file => {

    const feature = require(path.join(featuresPath, file))

    feature(app)

  })

}