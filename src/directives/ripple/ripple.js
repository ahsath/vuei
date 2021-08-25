import animate from './animate'

export default function ripple() {
    const ripples = []
    const SCALAR = 3
    // Ripple will scale 3x its `rippleSize`
    const keyframe = { transform: `scale(${SCALAR * 2}, ${SCALAR * 2})` }
    const className = 'vuei-top-0 vuei-left-0 vuei-absolute vuei-rounded-full vuei-bg-opacity-16 vuei-opacity-0'

    return function (e) {
        // Add required classes to ripple parent element
        this.classList.add('vuei-relative', 'vuei-overflow-hidden', 'vuei-z-0')

        const ripple = document.createElement('span')
        ripple.className = className
        ripple.classList.add(this.dataset.rippleColorClass)

        ripple.dataset.testid = 'ripple'

        const { x, y, width, height } = this.getBoundingClientRect()

        // Heuristics for ripple size
        const rippleSize = (width + height) / SCALAR
        // Compute the center of the ripple
        const rippleCenter = rippleSize / 2
        // Compute the real x and y coordinates where the event ocurred
        const truePointerX = e.x - x
        const truePointerY = e.y - y
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
        this.appendChild(ripple)

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
                !ripples.length && this.classList.remove('vuei-relative', 'vuei-overflow-hidden', 'vuei-z-0')
            }, 300);
        })
    }
}