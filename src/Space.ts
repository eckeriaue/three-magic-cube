import {
  WebGLRenderer,
  Clock,
  Scene,
  PerspectiveCamera,
  Color,
} from 'three'

import Control from './Control'

export default class Space  {
  name: string
  canvas: HTMLElement
  renderer: WebGLRenderer
  clock: Clock
  scene: Scene
  camera: PerspectiveCamera

  constructor(props: {name: string, canvas: HTMLElement}) {
    this.name = props.name ?? ''
    this.canvas = props.canvas ?? null
    this.main()
  }
  private main() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    })
    this.clock = new Clock()
    this.scene  = new Scene()
    this.camera = new PerspectiveCamera(35)
    this.camera.position.set(0, -1.7, 5)
    this.scene.background = new Color(0x000a0b)
  }
}