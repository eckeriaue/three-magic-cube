import { Pane } from "tweakpane"

export default class Panel {
  constructor(public config: {scene: object, object: {speed?: number }}) {
		const pn: any = new Pane({
      title: "Panel"
    })

		const sn = pn.addFolder({
      title: "Scene",
    })
		sn.addInput(this.config.scene, "speed", { min: 0, max: 1, label: "Speed" })

		const ob = pn.addFolder({
      title: "Object"
    })
		ob.addInput(this.config.object, "speed", { min: 0, max: 1, label: "Speed" })

  }
}