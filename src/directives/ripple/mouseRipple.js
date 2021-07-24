import createRipple from './createRipple'

export default function mouseRipple(e) { createRipple(this, { x: e.x, y: e.y }) }