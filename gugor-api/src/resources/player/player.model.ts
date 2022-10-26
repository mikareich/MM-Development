import { model, Schema } from "mongoose";
import { Player } from "@/interfaces";
import Integer from "@/utils/Integer";

const PlayerSchema = new Schema(
  {
    discordID: {
      type: String,
      required: true,
      unique: true,
    },
    minecraftUUID: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "operator", "default"],
    },
    password: {
      type: String,
      required: true,
    },
    stats: {
      type: {
        numberOfDeaths: Integer,
        level: Integer,
        trackedWaypoints: String || undefined,
        position: {
          dimension: {
            type: String,
            enum: ["overworld", "nether", "end"],
          },
          coordinates: {
            type: {
              x: Integer,
              y: Integer,
              z: Integer,
            },
          },
        },
      },
    },
  },
  {
    timestamps: true,
    collection: "players",
  }
);

export default model<Player>("Player", PlayerSchema);
