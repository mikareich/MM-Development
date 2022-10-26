import { CommandInteraction, CacheType } from "discord.js"
import Subcommand from "../../utils/Subcommand"

class WasMachtJulia extends Subcommand {
  constructor() {
    super("julia", "Was macht Julia eig?")
  }

  async execute(interaction: CommandInteraction<CacheType>) {
    const possibleAnswers = [
      "Niemand weiß es",
      "zu 90% weirde Bücher lesen",
      "ihre katze misshandeln :o",
      "Marco dazu bringen, sich ein Bass zu kaufen",
    ]

    const answer =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]

    interaction.reply(answer)
  }
}

export default WasMachtJulia
