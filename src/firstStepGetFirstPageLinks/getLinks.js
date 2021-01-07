async function getPageLinks(page) {
	const links = await page.evaluate(() => {
		const list = document.querySelector('.module-content ul');
		const elementsFromList = list.querySelectorAll('li ul li a');

		let links = [];

		for (let i = 0; i <= elementsFromList.length - 1; i++) {
			links.push(elementsFromList[i].href);
		}

		let uniqueLinks = [...new Set(links)];
		return uniqueLinks;
	});

	return links;
}

module.exports.getPageLinks = getPageLinks;
