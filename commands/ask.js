const { SlashCommandBuilder } = require("discord.js");
const { ask } = require("../ai");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask ChatGPT a question!")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("Write a prompt for ChatGPT to answer.")
    ),
  async execute(interaction) {
    const prompt = interaction.options.getString("prompt");
    await interaction.deferReply();
    const answer = await ask(`${prompt}`);
    await interaction.editReply(answer);
  },
};
