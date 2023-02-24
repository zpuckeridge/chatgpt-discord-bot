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

    // Create a thread
    const thread = await interaction.channel.threads.create({
      name: `Answering: ${prompt}`,
      autoArchiveDuration: 60,
      reason: `Answering: ${prompt}`,
    });

    // Get the answer from the AI and send it in the thread
    const answer = await ask(prompt);
    await thread.send(answer);
  },
};
