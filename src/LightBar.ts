import {
  MeshBasicMaterial,
  CapsuleGeometry,
  Mesh,
  type Scene
} from 'three'

type lightBarProps = {
  scene: Scene,
  uid: number
}
export default class LightBar {
  c_mes: Mesh
	constructor({scene, uid}: lightBarProps) {
		this.geometry(scene, uid)
	}
	private geometry(e: Scene, i: number) {
		const amp = 1
		const c_mat = new MeshBasicMaterial()
		const c_geo = new CapsuleGeometry(
      0.02,
      0.5 + Math.random(),
      5,
      16
    )

		this.c_mes = new Mesh(c_geo, c_mat)
		this.c_mes.position.y =
			-Math.random() * (amp / 2) + Math.random() * (amp / 2)
		this.c_mes.position.x = -Math.sin(i * 0.3 /* config */ ) * Math.PI
		this.c_mes.position.z = -Math.cos(i * 0.3 /* config */ ) * Math.PI
		e.add(this.c_mes)
	}
}
