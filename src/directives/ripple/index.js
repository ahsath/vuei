import ripple from "./ripple"

export default {
    mounted(el, binding) {
        el.dataset.rippleColorClass = binding.value?.class || 'vuei-bg-black'
        binding.dir.listener = ripple()
        el.addEventListener('mousedown', binding.dir.listener, { passive: true })
    },
    unmounted(el, binding) {
        el.removeEventListener('mousedown', binding.dir.listener, { passive: true })
    },
    updated(el, binding) {
        el.dataset.rippleColorClass = binding.value?.class || 'vuei-bg-black'
    }
}