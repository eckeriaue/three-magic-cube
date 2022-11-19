import Space from './Space'
import Panel from './Panel'

import config from './config'
const canvas: HTMLElement = document.getElementById('c')
const world = new Space({canvas: canvas, name: 'wrld'})

new Panel(config)

window.addEventListener("resize", () => world.resize());
window.addEventListener("load", () => world.resize());
world.resize();
