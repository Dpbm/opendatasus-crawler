const puppeteer = require('puppeteer-core');
const createScreenshotsFolder = require('./folderControl/controllerScreenshots');
const getFirstPageLinks = require('./firstStepGetFirstPageLinks/firstStepGetFirstPageLinks');

async function main() {
	await createScreenshotsFolder.createScreenshotsFolder();
	await getFirstPageLinks.getFirstPageLinks();
}

module.exports.main = main;
