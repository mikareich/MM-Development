import { model, Schema } from "mongoose";
import { Waypoint } from "@/interfaces";
import Integer from "@/utils/Integer";

const WaypointSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    dimension: {
      type: String,
      required: true,
      enum: ["overworld", "nether", "end"],
    },
    coordinates: {
      type: {
        x: Integer,
        y: Integer,
        z: Integer,
      },
      required: true,
    },
  },
  {
    collection: "waypoints",
    timestamps: true,
  }
);

export default model<Waypoint>("Waypoint", WaypointSchema);
