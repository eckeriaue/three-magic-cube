import {
  WebGLRenderer,
  Clock,
  Scene,
  PerspectiveCamera,
  Color,
  AxesHelper,
  PCFSoftShadowMap,
  HemisphereLight,
  PointLight,
  CircleGeometry,
  MeshMatcapMaterial,
  TextureLoader,
  Mesh,
} from 'three'

import {
  RoundedBoxGeometry
} from 'three/examples/jsm/geometries/RoundedBoxGeometry'

import Control from './Control'
import LightBar from './LightBar'

type params = {
  scene: {
    speed: number
  },
  object: {
    speed: number
  }
}

import texture from './texture'
export default class Space {
  name: string
  canvas: HTMLElement
  renderer: WebGLRenderer
  clock: Clock
  scene: Scene
  camera: PerspectiveCamera
  control: Control
  axeHelper: AxesHelper
  h_light: HemisphereLight
  p_light: PointLight
  c_mes: Mesh
  o_mes: Mesh
  params: params


  constructor({
    name,
    canvas,
    params,
  }: {
    name: string
    canvas: HTMLElement
    params: params
  }) {
    this.name = name ?? ''
    this.canvas = canvas ?? null
    this.params = params ?? {
      scene: {
        speed: 0.2
      },
      object: {
        speed: 0,
      }
    }
    this.main()
  }
  private main(): void {
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

    this.control = new Control({
      camera: this.camera,
      canvas: this.canvas
    })

    this.axeHelper = new AxesHelper(2)
    this.axeHelper.position.y = -1.5
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.init()
  }

  private init() {
    this.lights()
    this.capsule()
    this.object()
    this.render()
    this.loop()
    this.resize()
  }

  private lights(): void {
    this.h_light = new HemisphereLight(0xffffff, 0xaaaacc, 1)
    this.p_light = new PointLight(0xffffff, 0.2)
    this.p_light.castShadow = true
    this.p_light.position.set(1, 5, 1)
    this.scene.add(this.h_light, this.p_light)
  }

  private capsule(): void {
    for (let i = 0; i < 20; i++) {
			new LightBar({ scene: this.scene, uid: i }) as LightBar
    }
  }

  private object(): void {
    const o_geo: RoundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 5, 0.05)
    const c_geo: CircleGeometry = new CircleGeometry(5,5)
    const o_mat = new MeshMatcapMaterial({
      color: 0xffffff,
      // side:
      matcap: new TextureLoader().load(texture.matcap),
      map: new TextureLoader().load(texture.env),
    })

    this.c_mes = new Mesh(c_geo, o_mat)
    this.o_mes = new Mesh(o_geo, o_mat)
    this.c_mes.rotateX(Math.PI / 2)
    this.c_mes.position.y = -1
    this.scene.add(this.o_mes)
  }

  public resize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  private render(): void {
    this.scene.rotation.y = this.clock.getElapsedTime() * this.params.scene.speed

    this.o_mes.rotation.y = -this.clock.getElapsedTime() * this.params.object.speed 
    this.o_mes.rotation.z = this.clock.getElapsedTime() * this.params.object.speed
    this.o_mes.rotation.x = this.clock.getElapsedTime() * this.params.object.speed

    this.o_mes.position.y = 
      Math.sin(this.clock.getElapsedTime() * this.params.object.speed * 0.2)
    
    this.camera.lookAt(this.scene.position)
    this.camera.updateMatrixWorld()
    this.renderer.render(this.scene, this.camera)
  }
  private loop(): void {
    this.render()
    requestAnimationFrame(this.loop.bind(this))
  }
}