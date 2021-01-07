const puppeteer = require('puppeteer-core');
const {
	createDownloadsFolder,
} = require('../folderControl/controllerDownloads');
const { getFiles } = require('./getFiles');
const { download } = require('./downloader');

async function getInfoFromLinks(links) {
	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/google-chrome',
		headless: true,
	});

	let index = 0;
	for (let i = 0; i <= links.length - 1; i++) {
		console.log(links[i]);
		const newPage = await browser.newPage();
		await newPage.goto(links[i]);

		await newPage.screenshot({
			path: `src/screenshots/pages/site${i}.png`,
		});

		const files = await getFiles(newPage);

		for (let i = 0; i <= files.length - 1; i++) {
			await createDownloadsFolder();
			await download(files[i], index);
			index++;
		}
	}

	await browser.close();
}

module.exports.getInfoFromLinks = getInfoFromLinks;
