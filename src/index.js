const client = require("./helpers/discordClient");
const configCheck = require("./utils/config");
const jsyml = require("js-yaml");
const fs = require("fs");

const config = jsyml.load(fs.readFileSync("./config.yml", "utf8"));
client.config = jsyml.load(fs.readFileSync("./config.yml", "utf8"));
client.link = require("../config/system.json");
client.embeds = require("../config/embed.json");

client.color = config.general.color;
if (client.color = null) client.color = "#000000"
configCheck();

client.login(config.general.token).catch((err) => {
    console.log(`[Error] - ${err.message}`.red);
    process.exit(1);
});