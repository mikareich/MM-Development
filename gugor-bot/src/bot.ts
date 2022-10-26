import botClient, { loginClient } from "@/utils/client";
import Command from "@/utils/Command";
import registerCommands from "@/utils/registerCommands";
import logCLI from "shared/logCLI";
import handleInteraction from "@/eventHandler/handleInteraction";

async function startBot(commands: Command[]) {
  try {
    await loginClient();
    await registerCommands(commands);

    botClient.on("interactionCreate", async (interaction) =>
      handleInteraction(interaction, commands)
    );

    logCLI("Bot started", "success", "/bot/bot.ts");
  } catch (error) {
    logCLI(error, "error", "/bot/bot.ts");
  }
}

export default startBot;
