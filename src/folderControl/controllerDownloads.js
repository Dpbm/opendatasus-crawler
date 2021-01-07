const fs = require('fs');
const path = require('path');

async function createDownloadsFolder() {
	const folderDownloads = path.resolve(__dirname, '..', 'downloads');

	if (!fs.existsSync(folderDownloads)) {
		fs.mkdir(folderDownloads, () => {
			console.log(`-=-created downloads folder: ${folderDownloads}-=-\n`);
		});
	}
}
module.exports.createDownloadsFolder = createDownloadsFolder;
