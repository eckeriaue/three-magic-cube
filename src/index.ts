import Space from './Space'
import Panel from './Panel'

import config from './config'

const world = new Space({
  canvas: document.getElementById('c') as HTMLElement,
  name: 'wrld',
  params: config
})

new Panel(config)

window.addEventListener("resize", () => world.resize())
window.addEventListener("load", () => world.resize())
world.resize()