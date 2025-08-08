const multer = require('multer');

const dest_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/');
    } ,
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
},

})

const upload = multer({ 
    storage: dest_storage
});

module.exports = upload;