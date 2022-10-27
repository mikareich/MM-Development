import { Router, Request, Response } from "express";
import client, { loginClient } from "@bot/utils/client";
import envVariables from "@shared/envVariables";

const router = Router();

router.get("/:username", async (req: Request, res: Response) => {
  await loginClient();

  const { username } = req.params;

  const [name, discriminator] = username.split("#");

  const guild = client.guilds.resolve(envVariables.DC_FLUFFY_TUFFYS_GUILD_ID);
  const allUsers = await guild?.members.fetch();
  const user = allUsers?.find(
    (usr) =>
      usr.user.username.trim() === name.trim() &&
      usr.user.discriminator.trim() === discriminator.trim() &&
      !usr.user.bot
  );

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

export default router;
