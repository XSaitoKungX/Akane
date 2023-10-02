/*
# Discord Server: https://discord.gg/NDfK6NPZVZ
# Github: https://github.com/XSaitoKungX
# Docs: Coming Soon..
# Dashboard: Coming Soon..

# Created by: XSaitoKungX
# Version: 1.0.0
# Discord: xsaitox

# This file is the main configuration file for the bot.
# Inside this file you will find all the settings you need to configure the bot.
# If you have any questions, please contact us on our discord server.
# If you want to know more about the bot, you can visit our website
*/

const jsyml = require("js-yaml");
const fs = require("fs");

const config = jsyml.load(fs.readFileSync("./config.yml", "utf8"));
const { indexShard } = require("./src/helpers/license"); let sharding;

indexShard().then(r => {
    if (r === undefined)
    return;

    const { ShardingManager } = require("discord.js");
    const shards = new ShardingManager("./src/index.js", {
        token: config.general.token,
        totalShards: 1,
        respawn: true,
    });

    shards.spawn({
        amount: shards.totalShards,
        delay: 5500,
        timeout: 30000,
    })
});