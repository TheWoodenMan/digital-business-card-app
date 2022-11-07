const multer = require("multer");
const path = require("path");

module.exports = multer({
	// uploads files to the server
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		// restricts the type of file you are able to upload
		if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
			cb(new Error("File type is not supported"), false);
			return;
		}
		cb(null, true);
	},
});
