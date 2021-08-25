export default function animate(el) {
    Object.defineProperty(el, 'animate', {
        value: jest.fn(() => ({
            finished: Promise.resolve()
        }))
    })
    return el.animate()
}