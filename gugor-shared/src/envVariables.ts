import "dotenv/config";
import logCLI from "./logCLI";

const {
  NODE_ENV,
  PORT,
  DEV_API_URI,
  PROD_API_URI,
  DC_TOKEN,
  DC_CLIENT_ID,
  DC_FLUFFY_TUFFYS_GUILD_ID,
  MONGO_URI,
} = process.env;

// check if all env variables are set
if (
  DEV_API_URI &&
  PROD_API_URI &&
  DC_TOKEN &&
  DC_CLIENT_ID &&
  DC_FLUFFY_TUFFYS_GUILD_ID &&
  MONGO_URI
) {
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
  /** Development API URI */
  DEV_API_URI,
  /** Production API URI */
  PROD_API_URI,
  /** Discord client token */
  DC_TOKEN,
  /** Discord client ID */
  DC_CLIENT_ID,
  /** Discord fluffy tuffys server ID */
  DC_FLUFFY_TUFFYS_GUILD_ID,
  /** Mongo db uri */
  MONGO_URI,
};
