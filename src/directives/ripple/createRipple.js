const ripples = []
const SCALAR = 3
// Ripple will scale 3x its `rippleSize`
const keyframe = { transform: `scale(${SCALAR * 2}, ${SCALAR * 2})` }
const classNames = 'vuei-top-0 vuei-left-0 vuei-absolute vuei-rounded-full vuei-bg-black vuei-bg-opacity-20 vuei-opacity-0'

import animate from './animate'

export default (el, opts) => {
    // Add required classes to ripple parent element
    el.classList.add('vuei-relative', 'vuei-overflow-hidden')

    const ripple = document.createElement('span')
    ripple.className = classNames
    ripple.dataset.testid = 'ripple'

    const { x, y, width, height } = el.getBoundingClientRect()

    // Heuristics for ripple size
    const rippleSize = (width + height) / SCALAR
    // Compute the center of the ripple
    const rippleCenter = rippleSize / 2
    // Compute the real x and y coordinates where the event ocurred
    const truePointerX = opts.x - x
    const truePointerY = opts.y - y
    // Compute the ripple x and y coordinates to be at the origin of the circle
    const rippleX = truePointerX - rippleCenter
    const rippleY = truePointerY - rippleCenter

    ripple.style.transform = `translate(${rippleX}px, ${rippleY}px)`
    ripple.style.width = `${rippleSize}px`
    ripple.style.height = `${rippleSize}px`

    // Push the newly created ripple
    ripples.push(ripple)

    // Will run in the next event cycle
    setTimeout(() => {
        ripple.style.transition = 'opacity .1s'
        ripple.classList.toggle('vuei-opacity-0')
    });

    // Append ripple to the parent element
    el.appendChild(ripple)

    // Animate ripple scale
    const animation = animate(ripple, { keyframes: [keyframe], options: { duration: 300, easing: 'ease-in' } })
    animation.finished.then(() => {
        ripple.style.transition = 'opacity .3s'
        ripple.style.transform = keyframe.transform
        ripple.classList.toggle('vuei-opacity-0')
        setTimeout(() => {
            // Removes the first ripple from the DOM since it alredy finished animating (FIFO)
            ripples.shift().remove()
            // Removes parent element required classes if no more ripples found
            !ripples.length && el.classList.remove('vuei-relative', 'vuei-overflow-hidden')
        }, 300);
    })
}