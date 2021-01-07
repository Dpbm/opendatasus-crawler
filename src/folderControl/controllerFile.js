const fs = require('fs');
const path = require('path');

async function createFilesFolder(typeOfFile) {
	const folderFiles = path.resolve(__dirname, '..', 'downloads', typeOfFile);

	if (!fs.existsSync(folderFiles)) {
		fs.mkdir(folderFiles, () => {
			console.log('-=-create files downloads folder-=-');
		});
	}
}
module.exports.createFilesFolder = createFilesFolder;
