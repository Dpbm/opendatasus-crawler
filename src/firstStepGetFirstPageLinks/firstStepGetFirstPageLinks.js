const puppeteer = require('puppeteer-core');
const getInput = require('./getInput');
const getPageLinks = require('./getLinks');

async function getFirstPageLinks() {
	const webSiteUrl = await getInput.getInput();

	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/google-chrome',
		headless: true,
	});

	const page = await browser.newPage();
	await page.goto(webSiteUrl);

	await page.screenshot({ path: 'src/screenshots/webSite.png' });

	const links = await getPageLinks.getPageLinks(page);

	await browser.close();

	return links;
}

module.exports.getFirstPageLinks = getFirstPageLinks;
