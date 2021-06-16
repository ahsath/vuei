import { render, fireEvent } from '@testing-library/vue'
import App from '../src/App'

it('increments the counter value on click', async () => {
    const { getByText } = render(App)

    getByText('Times clicked: 0')
    const button = getByText('increment')

    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 2')
})