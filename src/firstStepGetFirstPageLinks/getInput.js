const readline = require('readline-sync');

async function getInput() {
	let webSiteUrl = readline.question('What is the url: ');
	return webSiteUrl;
}

module.exports.getInput = getInput;
