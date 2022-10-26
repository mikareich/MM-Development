import { inlineCode } from "@discordjs/builders";
import { Waypoint } from "@/interfaces";

/**
 * Converts a waypoint to a string.
 * @param waypoint Waypoint to convert to string.
 * @returns Waypoint as string.
 */
function convertWaypointObject(waypoint: Waypoint): string {
  return `${waypoint.name} (${waypoint.dimension}): ${inlineCode(
    `${waypoint.coordinates.x}, ${waypoint.coordinates.y}, ${waypoint.coordinates.z}`
  )}`;
}

export default convertWaypointObject;
