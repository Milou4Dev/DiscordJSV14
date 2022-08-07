const client = require('..')
const chalk = require('chalk')

client.on("ready", () => {
	const activities = [{ name: `Regarde Abtrixs dormir, hmm`, type: 3 }];
	const status = ['idle'];
//truc chiant
	let i = 0;
	client.user.setActivity(activities[i])

	let s = 0;
	client.user.setStatus(status[s])

	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});
