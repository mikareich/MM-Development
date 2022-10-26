import { CommandInteraction } from "discord.js";
import axios from "axios";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import Subcommand from "../../utils/Subcommand";
import { CommandOption, Waypoint } from "../../interfaces";
import route from "shared/route";
import logCLI from "shared/logCLI";

class DeleteWaypoint extends Subcommand {
  constructor() {
    const options: CommandOption[] = [
      {
        name: "name",
        description: "Name of the waypoint.",
        type: "STRING",
        required: true,
      },
    ];

    super("delete", "Deletes a waypoint.", options);
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply();

    const name = interaction.options.getString("name")!;

    try {
      const waypoint = (await axios
        .get(route("/waypoint"), {
          data: {
            name,
          },
          headers: { Authorization: "***" },
        })
        .then((res) => res.data[0])) as Waypoint;

      if (!waypoint) {
        interaction.editReply("Waypoint not found");
        return;
      }

      await axios.delete(route(`/waypoint`), {
        data: {
          // eslint-disable-next-line no-underscore-dangle
          id: waypoint._id,
        },
        headers: { Authorization: "***" },
      });

      interaction.editReply(`Waypoint ${name} deleted.`);
    } catch (error) {
      logCLI(error, "error", "/bot/commands/Waypoint/DeleteWaypoint.ts");

      if (error instanceof Error) {
        ErrorHandler.withCode(3, interaction, error.message);
      }
    }
  }
}

export default DeleteWaypoint;
