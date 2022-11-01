import "dotenv/config";
import logCLI from "./logCLI";

const { NODE_ENV, API_URI, DC_TOKEN, DC_CLIENT_ID, DC_FLUFFY_TUFFYS_GUILD_ID } =
  process.env;

// check if all env variables are set
if (
  NODE_ENV &&
  API_URI &&
  DC_TOKEN &&
  DC_CLIENT_ID &&
  DC_FLUFFY_TUFFYS_GUILD_ID
) {
  logCLI("All env variables are set", "success", "/envVariables.ts");
} else {
  logCLI("Missing environment variables", "error", "/envVariables.ts");
  console.log(
    NODE_ENV,
    API_URI,
    DC_TOKEN,
    DC_CLIENT_ID,
    DC_FLUFFY_TUFFYS_GUILD_ID
  );
  process.exit(1);
}

export default {
  /** Node environment */
  NODE_ENV,
  /** Development API URI */
  API_URI,
  /** Discord client token */
  DC_TOKEN,
  /** Discord client ID */
  DC_CLIENT_ID,
  /** Discord fluffy tuffys server ID */
  DC_FLUFFY_TUFFYS_GUILD_ID,
};
