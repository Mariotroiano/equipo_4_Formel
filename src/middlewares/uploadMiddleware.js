let multer = require('multer')
const path = require('path');

function uploadFiles (route){
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(route))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  return multer({ storage: storage })

} 

  module.exports = uploadFiles
  