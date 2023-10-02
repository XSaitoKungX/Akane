const emojis = require("../../config/emojis.json");
const chalk = require("chalk");

async function ErrorHandler({ error, status }) {
    console.log(chalk.redBright(`[Error]`) + chalk.white.bold(` ${error.stack}`));
    const name = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
    const time = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    console.table([{ Name: name, Time: time, Status: status }], ["Name", "Time", "Status"]);
}

async function ErrorCommands({ error, status, names, message }) {
    const name = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
    const time = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    console.table([{ Name: names, Time: time, Status: status, Command: names }], ["Name", "Time", "Status", "Command"]);
    message.channel.send({
        content: [
            `${emojis.error} Hello ${message.author}, an error occurred while executing the previously mentioned command. Please report it on the support server.`,
            `the interaction took place on \`${time}\` with the command \`${name}\`.`
        ].join("\n")
    });
}

async function ErrorEvent({ error, status, names, message }) {
    const name = error.stack.split("\n")[1].split("/").slice(-1)[0].split(" ")[0];
    const time = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    console.table([{ Name: name, Time: time, Status: status, Event: names }], ["Name", "Time", "Status", "Event"]);
    message.channel.send({
        content: [
            `${emojis.error} Hello ${message.author}, there was an error executing the event mentioned above, please report it to the support server.`,
            `the interaction took place on \`${time}\` with the event \`${name}\`.`
        ].join("\n")
    });
}

module.exports = { ErrorHandler, ErrorCommands, ErrorEvent };