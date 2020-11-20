const fs = require('fs');
const path = require('path');

async function createScreenshotsFolder() {
	const screenshotsFolder = path.resolve(__dirname, '..', 'screenshots');

	if (!fs.existsSync(screenshotsFolder)) {
		fs.mkdir(screenshotsFolder, () => {
			console.log('-=-create screenshots folder-=-');
		});
	}
}

module.exports.createScreenshotsFolder = createScreenshotsFolder;
