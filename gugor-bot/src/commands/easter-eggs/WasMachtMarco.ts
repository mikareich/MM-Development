import { CommandInteraction, CacheType } from "discord.js"
import Subcommand from "../../utils/Subcommand"

class WasMachtMarco extends Subcommand {
  constructor() {
    super("marco", "Was hat Marco wieder vor?")
  }

  async execute(interaction: CommandInteraction<CacheType>) {
    const possibleAnswers = [
      "MINECRAFT SPIELEN",
      "Noch mehr Minecraft spielen",
      "m i n e c r a f t",
      "bissel rocket sience mc plugins mit mika 🚀",
    ]

    const answer =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]

    interaction.reply(answer)
  }
}

export default WasMachtMarco
