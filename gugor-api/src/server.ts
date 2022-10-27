import express, { json, Request, Response, NextFunction } from "express";
import cors from "cors";
import connectDB from "@/utils/connectDB";
import waypointRouter from "@/resources/waypoint/waypoint.router";
import playerRouter from "@/resources/player/player.router";
import discordRouter from "@/resources/discord";
import logCLI from "@shared/logCLI";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

function loggerMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  logCLI(
    {
      METHOD: request.method,
      PARAMS: request.params,
      BODY: request.body,
      QUERY: request.query,
      IP: request.ip,
      URL: request.url,
    },
    "info",
    "/api/server.ts"
  );
  next();
}

app.use(cors());
app.use(json());
app.use(loggerMiddleware);

app.get("/", (req, res) => res.send("API is up and running"));

app.use("/api/waypoint", waypointRouter);
app.use("/api/player", playerRouter);
app.use("/api/discord", discordRouter);

app.use("/verify", express.static(path.join(__dirname, "verification-gui")));

async function startServer() {
  await connectDB();

  try {
    app.listen(PORT, () => {
      logCLI(`Server started on port ${PORT}`, "success", "/api/server.ts");
    });
  } catch (error) {
    logCLI(error, "error", "/api/server");
  }
}

export default startServer;
