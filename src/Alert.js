import { h, ref, defineComponent } from 'vue'

export const Alert = defineComponent({
    setup() {
        const count = ref(0)
        return {
            count: count.value
        }
    },
    render() {
        return h('div', {}, ref('Hello, World!').value)
    }
})