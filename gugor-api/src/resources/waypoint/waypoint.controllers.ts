import { Request, Response } from "express";
import { IDQuery, Waypoint as IWaypoint, WorldDimension } from "@/interfaces";
import logCLI from "shared/logCLI";
import Waypoint from "./waypoint.model";

interface WaypointQuery {
  name?: string;
  dimension?: WorldDimension;
  "coordinates.x"?: number;
  "coordinates.y"?: number;
  "coordinates.z"?: number;
}

export async function createWaypoint(
  req: Request<{}, {}, IWaypoint>,
  res: Response
) {
  try {
    const waypointData = req.body;

    const waypoint = await Waypoint.create(waypointData);

    res.status(201).json(waypoint);
  } catch (error) {
    logCLI(
      error as string,
      "error",
      "/api/resources/waypoint/waypoint.controllers.ts"
    );

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export async function getWaypoint(
  req: Request<{}, {}, WaypointQuery>,
  res: Response
) {
  try {
    const query = req.body;

    const waypoints = await Waypoint.find(query);

    res.status(200).json(waypoints);
  } catch (error) {
    logCLI(
      error as string,
      "error",
      "/api/resources/waypoint/waypoint.controllers.ts"
    );

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export async function deleteWaypoint(
  req: Request<{}, {}, IDQuery>,
  res: Response
): Promise<void> {
  try {
    const { id } = req.body;

    const waypoint = await Waypoint.findByIdAndDelete(id);

    if (!waypoint) throw new Error(`Waypoint with id ${id} not found.`);

    res.status(200).json({ message: `Waypoint with id ${id} deleted.` });
  } catch (error) {
    logCLI(
      error as string,
      "error",
      "/api/resources/waypoint/waypoint.controllers.ts"
    );

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}
