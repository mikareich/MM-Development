import { Request, Response } from "express";
import {
  IDQuery,
  Player as IPlayer,
  PlayerRole,
  PlayerStats,
  WorldDimension,
} from "@/interfaces";
import Player from "./player.model";

interface PlayerQuery {
  _id?: string;
  discordID?: string;
  minecraftUUID?: string;
  role?: PlayerRole;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  "stats.numberOfDeaths"?: number;
  "stats.xpLevel"?: number;
  "stats.position.dimension"?: WorldDimension;
  "stats.position.coordinates.x": number;
  "stats.position.coordinates.y": number;
  "stats.position.coordinates.z": number;
}

export async function createPlayer(
  req: Request<{}, {}, IPlayer>,
  res: Response
) {
  try {
    const playerData = req.body;

    const player = await Player.create(playerData);

    res.status(201).json(player);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export async function getPlayer(
  req: Request<{}, {}, PlayerQuery>,
  res: Response
) {
  try {
    const query = req.body;

    const players = await Player.find(query);

    res.status(200).json(players);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}

interface UpdateBody extends IDQuery {
  update: {
    role?: PlayerRole;
    stats?: PlayerStats;
  };
}

export async function updatePlayer(
  req: Request<{}, {}, UpdateBody>,
  res: Response
) {
  try {
    const { id, update } = req.body;

    const player = await Player.findByIdAndUpdate(id, update, {
      returnDocument: "after", // Return the updated document
    });

    res.status(200).json(player);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export async function deletePlayer(
  req: Request<{}, {}, IDQuery>,
  res: Response
) {
  try {
    const { id } = req.body;

    const player = await Player.findByIdAndDelete(id);

    if (!player) throw new Error(`Player with id ${id} not found.`);

    res.status(200).json(`Player with id ${id} deleted`);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
}
