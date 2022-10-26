import { ApplicationCommandObject } from "@/interfaces";
import Command from "./Command";
import ALL_OPTION_TYPES from "./allCommandOptionTypes";
import Subcommand from "./Subcommand";

/** Parses (sub)command to JSON Object
 * @param command Command to parse
 * @returns JSON Object
 */
function toAppilcationCommandObject(
  command: Command | Subcommand
): ApplicationCommandObject {
  const options: ApplicationCommandObject[] = [];

  // add subcommands
  if (command instanceof Command) {
    command.subcommands.forEach((subcommand) => {
      const option = subcommand.toACO();
      option.type = 1;

      options.push(option);
    });
  }

  // add options
  command.options.forEach(({ name, description, type, required, choices }) => {
    const option: ApplicationCommandObject = {
      name,
      description,
      required: required || false,
      type: ALL_OPTION_TYPES.indexOf(type) + 1,
    };

    // adds choices to option if option is of type "STRING" or "INTEGER"
    if (choices && (type === "STRING" || type === "INTEGER")) {
      option.choices = choices;
    }

    options.push(option);
  });

  return {
    name: command.name,
    description: command.description,
    options,
  };
}

export default toAppilcationCommandObject;
