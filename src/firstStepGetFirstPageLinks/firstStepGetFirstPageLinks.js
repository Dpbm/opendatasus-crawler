const puppeteer = require('puppeteer-core');
const getInput = require('./getInput');

async function getFirstPageLinks() {
	const webSiteUrl = await getInput.getInput();

	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/google-chrome',
		headless: false,
	});

	const page = await browser.newPage();
	await page.goto(webSiteUrl);

	await page.screenshot({ path: 'src/screenshots/webSite.png' });

	await browser.close();
}

module.exports.getFirstPageLinks = getFirstPageLinks;
