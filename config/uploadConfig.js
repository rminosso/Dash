const multer = require("multer");

const diretorio = "storage/multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, diretorio);
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split(".")[1];

        const fileName = file.originalname.split(".")[0];

        cb(null, `${fileName}.${ext}`);
    }
});

module.exports = multer({ storage });