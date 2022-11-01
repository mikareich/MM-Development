import { Client, Intents } from "discord.js";
import logCLI from "@/utils/logCLI";
import envVars from "@/utils/envVariables";

/** Client object for the discord bot */
const botClient = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

/**
 * Connects client to discord services.
 */
export async function loginClient() {
  try {
    await botClient.login(envVars.DC_TOKEN);
    logCLI("Logged in to discord", "success", "/bot/utils/client.ts");
  } catch (error) {
    logCLI(error, "error", "/bot/utils/client.ts");
  }
}

export default botClient;
