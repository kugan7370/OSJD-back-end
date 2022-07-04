const multer = require('multer');

const storage = multer.diskStorage({});

const filefilter = (req, file, cb) => {
    console.log(file);
    if (!file.mimetype.includes("image")) {
        return cb("invalid image formate!", false)
    }
    cd(null, true);
}

module.exports = multer({ storage, filefilter });