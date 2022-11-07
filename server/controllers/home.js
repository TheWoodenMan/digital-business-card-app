const path = require("path");

module.exports = {
	getIndex: (req, res) => {
		res.status(200).sendFile(path.join(__dirname, "../../index.html"));
	}
};
