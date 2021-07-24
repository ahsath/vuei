import mouseRipple from "./mouseRipple"

export default {
    mounted(el) {
        el.addEventListener('mousedown', mouseRipple, { passive: true })
    }
}