import { h, ref, defineComponent } from 'vue'

export default defineComponent({
    render() {
        return h('div', {}, ref('I am Banner, really? yeppers').value)
    }
})