import Command from "../../utils/Command";
import CreateWaypoint from "./CreateWaypoint";
import DeleteWaypoint from "./DeleteWaypoint";
import GetWaypoint from "./GetWaypoint";
import ListWaypoints from "./ListWaypoints";

class Waypoint extends Command {
  constructor() {
    super("waypoint", "Manages waypoints.", [
      new CreateWaypoint(),
      new GetWaypoint(),
      new DeleteWaypoint(),
      new ListWaypoints(),
    ]);
  }
}

export default Waypoint;
