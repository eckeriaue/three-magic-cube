import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const canvas: HTMLElement = document.getElementById('c')
console.log(OrbitControls)
// class Space {
// 	constructor(props) {
// 		this.name = props.name ? props.name : "Null";
// 		this.canvas = props.canvas ? props.canvas : null;
// 		this.main();
// 	}
// 	main() {
// 		this.renderer = new THREE.WebGLRenderer({
// 			canvas: this.canvas,
// 			antialias: true,
// 			alpha: true
// 		});
// 		this.clock = new THREE.Clock();
// 		this.scene = new THREE.Scene();
// 		this.camera = new THREE.PerspectiveCamera(35);
// 		this.camera.position.set(0, -1.7, 5);
// 		this.scene.background = new THREE.Color(0x000a0b);
// 		this.control = new Control({ camera: this.camera, canvas: this.canvas });
// 		//--
// 		this.axesHelper = new THREE.AxesHelper(2);
// 		this.axesHelper.position.y = -1.5;
// 		//this.scene.add(this.axesHelper);
// 		this.renderer.shadowMap.enabled = true;
// 		this.renderer.shadowMap.type = THREE.PCFShoftSHadowMap;
// 		this.init();
// 	}
// 	init() {
// 		//this.lights();
// 		this.object();
// 		this.capsule();
// 		this.render();
// 		this.loop();
// 		this.resize();
// 	}
// 	lights() {
// 		this.h_light = new THREE.HemisphereLight(0xffffff, 0xaaaacc, 1);
// 		this.p_light = new THREE.PointLight(0xffffff, 0.2);
// 		this.p_light.castShadow = true;
// 		this.p_light.position.set(1, 5, 1);
// 		this.scene.add(this.h_light, this.p_light);
// 	}
// 	capsule() {
// 		for (let i = 0; i <= 20; i++) {
// 			const lightbar = new LightBar({ scene: this.scene, uid: i });
// 		}
// 	}
// 	object() {
// 		const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
// 		const c_geo = new THREE.CircleGeometry(5, 5);
// 		const o_mat = new THREE.MeshMatcapMaterial({
// 			color: 0xffffff,
// 			//side: THREE.DoubleSide,
// 			matcap: new THREE.TextureLoader().load(texture.matcap),
// 			map: new THREE.TextureLoader().load(texture.env)
// 		});

// 		this.c_mes = new THREE.Mesh(c_geo, o_mat);
// 		this.o_mes = new THREE.Mesh(o_geo, o_mat);
// 		this.c_mes.rotateX(Math.PI / 2);
// 		this.c_mes.position.y = -1;
// 		this.scene.add(this.o_mes);
// 	}
// 	resize() {
// 		this.camera.aspect = window.innerWidth / window.innerHeight;
// 		this.camera.updateProjectionMatrix();
// 		this.renderer.setSize(window.innerWidth, window.innerHeight);
// 	}
// 	render() {
// 		this.scene.rotation.y = this.clock.getElapsedTime() * config.scene.speed;
// 		this.o_mes.rotation.y = -this.clock.getElapsedTime() * config.object.speed;
// 		this.o_mes.rotation.z = this.clock.getElapsedTime() * config.object.speed;
// 		this.o_mes.rotation.x = this.clock.getElapsedTime() * config.object.speed;
// 		this.o_mes.position.y =
// 			Math.sin(this.clock.getElapsedTime() * config.object.speed) * 0.2;
// 		this.camera.lookAt(this.scene.position);
// 		this.camera.updateMatrixWorld();
// 		this.renderer.render(this.scene, this.camera);
// 		this.control.update();
// 	}
// 	loop() {
// 		this.render();
// 		requestAnimationFrame(this.loop.bind(this));
// 	}
// }
