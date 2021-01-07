const createScreenshotsFolder = require('./folderControl/controllerScreenshots');
const getFirstPageLinks = require('./firstStepGetFirstPageLinks/firstStepGetFirstPageLinks');
const createPagesFolder = require('./folderControl/controllerPages');
const getInfoFromLinks = require('./secondStepGetLinksAndDownloadFiles/secondStepGetLinksAndDownloadFiles');

async function main() {
	await createScreenshotsFolder.createScreenshotsFolder();
	const links = await getFirstPageLinks.getFirstPageLinks();

	console.log(links);

	await createPagesFolder.createPagesFolder();
	await getInfoFromLinks.getInfoFromLinks(links);

	process.exit(0);
}

module.exports.main = main;
