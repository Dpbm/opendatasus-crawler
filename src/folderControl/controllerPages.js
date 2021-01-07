const fs = require('fs');
const path = require('path');

async function createPagesFolder() {
	const pagesFolder = path.resolve(__dirname, '..', 'screenshots', 'pages');

	if (!fs.existsSync(pagesFolder)) {
		fs.mkdir(pagesFolder, () => {
			console.log('-=-create screenshots Pages folder-=-');
		});
	}
}

module.exports.createPagesFolder = createPagesFolder;
