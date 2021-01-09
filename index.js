const { Plugin } = require("powercord/entities")

class Uwufy extends Plugin {
  async startPlugin() {
    powercord.api.commands.registerCommand({
      command: "uwu",
      description: "uwufy your text",
      usage: "{c} [text]",
      executor: args => ({
        send: true,
        result: this.uwufy(args.join(" ")),
      }),
    })
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("uwu");
  }

  uwufy(text) {
    text = text
      .replace(/L|R/gm, "W")
      .replace(/l|r/gm, "w")
      .replace(/n([aeiou])/gm, "ny$1")
      .replace(/N([aeiou])/gm, "Ny$1")
      .replace(/N([AEIOU])/gm, "NY$1")
      .replace(/ove/gm, "uv")

    return text
  }
}

module.exports = Uwufy
