const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { createFilesFolder } = require('../folderControl/controllerFile');

async function download(url, index) {
	const types = ['.pdf', '.zip', '.xlsx', '.csv'];

	for (let i = 0; i <= types.length - 1; i++) {
		if (url.includes(types[i])) {
			const fileType = types[i].replace('.', '');
			await createFilesFolder(fileType);

			const pathFiles = path.resolve(
				__dirname,
				'..',
				'downloads',
				fileType,
				`file${index}.${fileType}`
			);
			const writer = fs.createWriteStream(pathFiles);
			try {
				const response = await axios({
					method: 'GET',
					url: url,
					responseType: 'stream',
				});

				response.data.pipe(writer);

				console.log(`Downloaded: ${pathFiles}`);
			} catch {
				console.log(`Download failed: ${pathFiles}`);
			}
		}
	}
}

module.exports.download = download;
