import botClient, { loginClient } from "@/utils/client";
import Command from "@/utils/Command";
import registerCommands from "@/utils/registerCommands";
import logCLI from "@/utils/logCLI";
import handleInteraction from "@/eventHandler/handleInteraction";

async function startBot(commands: Command[]) {
  try {
    await loginClient();
    await registerCommands(commands);

    botClient.on("interactionCreate", async (interaction) => {
      handleInteraction(interaction, commands);
    });

    logCLI("Bot started", "success", "/bot/bot.ts");
    // log env variables
    // logCLI(process.env, "info", "/bot/bot.ts");
    console.log("Bot started");
  } catch (error) {
    logCLI(error, "error", "/bot/bot.ts");
  }
}

export default startBot;
