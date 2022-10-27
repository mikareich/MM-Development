import { Interaction } from "discord.js";
import Command from "@/utils/Command";
import ErrorHandler from "@/errorHandler/ErrorHandler";
import logCLI from "@shared/logCLI";

/**
 * Assigns commands to interactions and executes them.
 * @param interaction Interaction Object
 * @param commands Array of Command Objects
 */
async function handleInteraction(
  interaction: Interaction,
  commands: Command[]
) {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  // Find command
  const command = commands.find((c) => c.name === commandName)!;
  const subcommand = command.subcommands.find(
    (c) => c.name === interaction.options.getSubcommand()
  );

  // execute command
  try {
    logCLI(
      { interaction, command, subcommand },
      "info",
      "src/bot/eventHandler/handleInteraction.ts"
    );
    if (subcommand) {
      await subcommand.execute(interaction);
    } else if (command.execute) {
      await command.execute(interaction);
    }
  } catch (error) {
    logCLI(error, "error", "/bot/eventHandler/handleInteraction.ts");
    await ErrorHandler.withCode(3, interaction, error as string);
  }
}

export default handleInteraction;
