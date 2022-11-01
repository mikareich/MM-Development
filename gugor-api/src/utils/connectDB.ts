import { connect } from "mongoose";
import envVariables from "@/utils/envVariables";
import logCLI from "@/utils/logCLI";

/** Connects with the gugor database */
async function connectDB() {
  try {
    await connect(envVariables.MONGO_URI);

    logCLI("Connected to database", "success", "/api/utils/connectDB.ts");
  } catch (error) {
    logCLI(error as string, "error", "/api/utils/connectDB.ts");
  }
}

export default connectDB;
