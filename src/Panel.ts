import { Pane } from "tweakpane"
import config from "./config"

export default class Panel {
  constructor() {
		const pn: any = new Pane({
      title: "Panel"
    })

		const sn = pn.addFolder({
      title: "Scene"
    })

		sn.addInput(config.scene, "speed", { min: 0, max: 1, label: "Speed" })
		const ob = pn.addFolder({ title: "Object" })
		ob.addInput(config.object, "speed", { min: 0, max: 1, label: "Speed" })
  }
}