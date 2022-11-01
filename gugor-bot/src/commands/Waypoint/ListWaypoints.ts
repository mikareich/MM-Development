import { CommandInteraction } from "discord.js";
import axios from "axios";
import ErrorHandler from "@/errorHandler/ErrorHandler";
import convertWaypointObject from "@/utils/convertWaypointObject";
import Subcommand from "@/utils/Subcommand";
import envVariables from "@/utils/envVariables";

class GetWaypoint extends Subcommand {
  constructor() {
    super("getall", "Returns all waypoints.");
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply();

    try {
      const waypointList = await axios
        .get(envVariables.API_URI)
        .then((res) => res.data)
        .then((waypoints) => waypoints.map(convertWaypointObject));

      interaction.editReply(
        `${waypointList.join("\n\n") || "No waypoints found."}`
      );
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        ErrorHandler.withCode(3, interaction, error.message);
      }
    }
  }
}

export default GetWaypoint;
