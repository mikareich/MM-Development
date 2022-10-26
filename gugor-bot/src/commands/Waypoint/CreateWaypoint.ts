import { CommandInteraction } from "discord.js";
import axios, { AxiosError } from "axios";
import ErrorHandler from "@/errorHandler/ErrorHandler";
import Subcommand from "@/utils/Subcommand";
import { CommandOption, WorldDimension } from "@/interfaces";
import route from "shared/route";

class CreateWaypoint extends Subcommand {
  constructor() {
    const options: CommandOption[] = [
      {
        name: "name",
        description: "Name of the waypoint.",
        type: "STRING",
        required: true,
      },
      {
        name: "x",
        description: "X coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "y",
        description: "Y coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "z",
        description: "Z coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "dimension",
        description: "Dimension of the waypoint.",
        type: "STRING",
        choices: [
          {
            name: "Overworld",
            value: "overworld",
          },
          {
            name: "Nether",
            value: "nether",
          },
          {
            name: "End",
            value: "end",
          },
        ],
      },
    ];

    super("create", "Creates a waypoint.", options);
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply();

    const name = interaction.options.getString("name")!;
    const x = Number(interaction.options.getInteger("x")!);
    const y = Number(interaction.options.getInteger("y")!);
    const z = Number(interaction.options.getInteger("z")!);
    const dimension =
      <WorldDimension>interaction.options.getString("dimension") || "overworld";

    const waypoint = {
      name,
      dimension,
      coordinates: {
        x,
        y,
        z,
      },
    };

    try {
      await axios.post(route("/waypoint"), waypoint);

      interaction.editReply(`Waypoint ${name} created.`);
    } catch (err: any) {
      const error = err as AxiosError<{ error: string }, any> | Error;

      if (axios.isAxiosError(error)) {
        // @ts-ignore
        await ErrorHandler.withCode(3, interaction, error.response.data.error);
      } else {
        await ErrorHandler.withCode(3, interaction, error.message);
      }
    }
  }
}

export default CreateWaypoint;
