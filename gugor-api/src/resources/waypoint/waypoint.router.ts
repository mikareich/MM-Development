import { Router } from "express"
import {
  createWaypoint,
  deleteWaypoint,
  getWaypoint,
} from "./waypoint.controllers"

const router = Router()

router.get("/", getWaypoint)

router.post("/", createWaypoint)

router.delete("/", deleteWaypoint)

export default router
