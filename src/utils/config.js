const systems = require("../../config/system.json");
const package = require("../../package.json");
const chalk = require("chalk");

async function configCheck() {
    Object.entries(package.dependencies).forEach(([key, value]) => {
        if (value === "" || value === " " || value === null || value === undefined) {
            console.log(chalk.redBright(`[PACKAGES]`) + ` You don't have a ${key}! You can enter a ${key} in the package.json file.`)
            process.exit(1).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    for (const [key, value] of Object.entries(systems)) {
        if (value === "" || value === " " || value === null || value === undefined) {
            console.log(chalk.redBright(`[SYSTEM]`) + ` You don't have a ${key}! You can enter a ${key} in the config.json file, in the systems folder.`)
            process.exit(1).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}

module.exports = configCheck;