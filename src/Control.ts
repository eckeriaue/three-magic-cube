import type { PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

type coltrolsProps = {
  camera: PerspectiveCamera,
  canvas: HTMLElement
}
export default class Control {
	private controls: OrbitControls
  constructor({
    camera,
    canvas
  }: coltrolsProps ) {
		this.controls = new OrbitControls(camera, canvas)
		this.init()
	}

	private init(): void {
		this.controls.target.set(0, 0, 0)
		this.controls.rotateSpeed = 0.9
		this.controls.enableZoom = false
		this.controls.enableDamping = true
		this.controls.dampingFactor = .02

    this.update()
	}

	private update(): void {
		this.controls.update()
	}
}