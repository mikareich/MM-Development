import "dotenv/config";
import logCLI from "./logCLI";

const { NODE_ENV, PORT, MONGO_URI } = process.env;

// check if all env variables are set
if (MONGO_URI) {
  logCLI("All env variables are set", "success", "/envVariables.ts");
} else {
  logCLI("Missing environment variables", "error", "/envVariables.ts");
  process.exit(1);
}

export default {
  /** Node environment */
  NODE_ENV,
  /** Port to listen on */
  PORT,
  /** Mongo db uri */
  MONGO_URI,
};
