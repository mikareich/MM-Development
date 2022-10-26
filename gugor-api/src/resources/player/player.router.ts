import { Router } from "express"
import {
  createPlayer,
  deletePlayer,
  getPlayer,
  updatePlayer,
} from "./player.controllers"

const router = Router()

router.get("/", getPlayer)

router.post("/", createPlayer)

router.put("/", updatePlayer)

router.delete("/", deletePlayer)

export default router
