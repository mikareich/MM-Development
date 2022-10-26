import { CommandInteraction } from "discord.js";
import { ApplicationCommandObject, CommandOption } from "@/interfaces";
import Subcommand from "./Subcommand";
import toAppilcationCommandObject from "./toApplicationCommandObject";

declare interface CommandDeclaration {
  /** Name of the command */
  readonly name: string;

  /** Short description of what the command can do */
  readonly description: string;

  /** Subcommands */
  readonly subcommands: Subcommand[];

  /** Options */
  readonly options: CommandOption[];

  /** Function to execute when command is called */
  execute?(_interaction: CommandInteraction): void | Promise<void>;

  /** Formats command to Application Command Object */
  toACO(): ApplicationCommandObject;
}

class Command implements CommandDeclaration {
  public name: string;

  public description: string;

  public subcommands: Subcommand[] = [];

  public options: CommandOption[] = [];

  /**
   * Creates a new command.
   * @param name Name of the command
   * @param description Description of the command
   * @param subcommands Subcommands
   * @param options Options
   */
  constructor(
    name: string,
    description: string,
    subcommands?: Subcommand[],
    options?: CommandOption[]
  ) {
    this.name = name;
    this.description = description;
    if (subcommands) this.subcommands = subcommands;
    if (options) this.options = options;
  }

  execute?(_interaction: CommandInteraction): void | Promise<void> {}

  toACO() {
    return toAppilcationCommandObject(this);
  }
}

export default Command;
