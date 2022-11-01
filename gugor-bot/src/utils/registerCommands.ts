import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import logCLI from "@/utils/logCLI";
import envVariables from "@/utils/envVariables";
import Command from "./Command";

/**
 * Registers commands with the Discord REST API.
 * @param commands - An array of commands to register.
 */
async function registerCommands(commands: Command[]) {
  const rest = new REST({ version: "9" }).setToken(envVariables.DC_TOKEN);

  try {
    await rest.put(
      Routes.applicationGuildCommands(
        envVariables.DC_CLIENT_ID!,
        envVariables.DC_FLUFFY_TUFFYS_GUILD_ID!
      ),
      {
        body: commands.map((command) => command.toACO()),
      }
    );
  } catch (error) {
    logCLI(error, "error", "/bot/utils/registerCommands.ts");
  }
}

export default registerCommands;
