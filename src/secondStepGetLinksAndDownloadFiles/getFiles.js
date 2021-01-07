async function getFiles(page) {
	const linksFiles = await page.evaluate(() => {
		const pathLinkFiles = document.querySelector(
			'article.module div.module-content section.resources ul'
		);
		const getLinksFiles = pathLinkFiles.querySelectorAll('li div ul li a');
		let linksFiles = [];

		const extensions = ['.csv', '.pdf', '.zip', '.xlsx'];

		for (let i = 0; i <= getLinksFiles.length - 1; i++) {
			extensions.map((extension) => {
				if (getLinksFiles[i].href.includes(extension)) {
					linksFiles.push(getLinksFiles[i].href);
				}
			});
		}

		return linksFiles;
	});

	return linksFiles;
}

module.exports.getFiles = getFiles;
