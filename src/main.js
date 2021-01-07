const createScreenshotsFolder = require('./folderControl/controllerScreenshots');
const getFirstPageLinks = require('./firstStepGetFirstPageLinks/firstStepGetFirstPageLinks');

async function main() {
	await createScreenshotsFolder.createScreenshotsFolder();
	const links = await getFirstPageLinks.getFirstPageLinks();
}

module.exports.main = main;
