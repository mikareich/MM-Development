import { CommandInteraction, CacheType } from "discord.js"
import Subcommand from "../../utils/Subcommand"

class WasMachtMika extends Subcommand {
  constructor() {
    super("mika", "MIKAMIKAMIKAMIKA")
  }

  async execute(interaction: CommandInteraction<CacheType>) {
    const possibleAnswers = [
      "Nachts um halb ein Easter Egg programmieren weil er kein Leben hat 😃🔫",
      "Rocket Science mit Marco 🚀",
      "Einen Mittagsschlaf",
      "DON'T ASK",
      "duschen ;)))))",
    ]

    const answer =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]

    interaction.reply(answer)
  }
}

export default WasMachtMika
