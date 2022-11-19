import Space from './Space'
import Panel from './Panel'
const canvas: HTMLElement = document.getElementById('c')
const world = new Space({canvas: canvas, name: 'ss'})
const panel = new Panel()
window.addEventListener("resize", () => world.resize());
window.addEventListener("load", () => world.resize());
world.resize();
