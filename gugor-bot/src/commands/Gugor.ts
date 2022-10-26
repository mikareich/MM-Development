import axios from "axios";
import { CommandInteraction } from "discord.js";
import Command from "@/utils/Command";

class Gugor extends Command {
  constructor() {
    super("gugor", "Tests if the bot is online and working.");
  }

  async execute(interaction: CommandInteraction) {
    const { data } = await axios(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = `${data.setup}\n${data.punchline}\n*Gugor is working :yay:*`;
    await interaction.reply(joke);
  }
}

export default Gugor;
