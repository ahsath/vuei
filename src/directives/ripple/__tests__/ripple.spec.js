/**
 * @jest-environment jsdom
 */

jest.mock('../animate.js')

import { render, fireEvent, waitFor } from '@testing-library/vue'
import ripple from '..'

describe('ripple', () => {
    it('shows an span element inside the button when the mousedown event is triggered on it', async () => {
        const template = { template: '<button v-ripple style="width: 100px; height: 100px" />' }
        const { getByRole, getByTestId } = render(template, { global: { directives: { ripple } } })
        const button = getByRole('button')

        await fireEvent.mouseDown(button)
        await waitFor(() => expect(button).toContainElement(getByTestId('ripple')))
    })
})