import Command from "../../utils/Command"
import WasMachtJulia from "./WasMachtJulia"
import WasMachtMarco from "./WasMachtMarco"
import WasMachtMika from "./WasMachtMika"
import WasMachtMinh from "./WasMachtMinh"

class WasMacht extends Command {
  constructor() {
    super("was-macht", "Was macht ...", [
      new WasMachtMika(),
      new WasMachtMinh(),
      new WasMachtJulia(),
      new WasMachtMarco(),
    ])
  }
}

export default WasMacht
