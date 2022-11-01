import { CommandInteraction } from "discord.js";
import { Error } from "@/interfaces";
import logCLI from "@/utils/logCLI";

class ErrorHandler {
  public static Errors: Error[] = [
    {
      message: "Error not found",
      code: 1,
    },
    {
      message: "Command not found",
      code: 2,
    },
    {
      message: "Oh snap! An unknown error occurred.",
      code: 3,
    },
  ];

  /**
   * Replies with an error message.
   * @param code Code of the error
   * @param interaction Interaction Object
   * @returns Error Object
   */
  public static async withCode(
    code: number,
    interaction: CommandInteraction,
    details?: string
  ): Promise<Error | undefined> {
    const error = ErrorHandler.Errors.find((e) => e.code === code);

    if (!error) return ErrorHandler.withCode(1, interaction, details);

    const errorMessage = `⚠️ ${error.message} ⚠️ \n**Details:** \`${details}\``;

    if (interaction.replied || interaction.deferred) {
      await interaction.editReply(errorMessage);
    } else {
      await interaction.reply(errorMessage);
    }

    logCLI(errorMessage, "warning", "/bot/errorHandler/ErrorHandler.ts");

    return error;
  }
}

export default ErrorHandler;
