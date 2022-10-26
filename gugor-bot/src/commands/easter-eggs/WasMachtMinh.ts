import { CommandInteraction, CacheType } from "discord.js"
import Subcommand from "../../utils/Subcommand"

class WasMachtMinh extends Subcommand {
  constructor() {
    super("ming", "Was macht Minh?")
  }

  async execute(interaction: CommandInteraction<CacheType>) {
    const possibleAnswers = [
      "Ming macht gerade nichts",
      "Ming isst schon wieder :/",
      "Ming hört jetzt auf Genshin zu suchten und kommt on",
      "Frag besser nicht 😏",
    ]

    const answer =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]

    interaction.reply(answer)
  }
}

export default WasMachtMinh
