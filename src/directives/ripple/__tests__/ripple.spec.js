/**
 * @jest-environment jsdom
 */

jest.mock('../animate.js')

import { render, fireEvent, waitFor } from '@testing-library/vue'
import ripple from '..'

const renderFactory = (template) => render(template, { global: { directives: { ripple } } })

describe('ripple', () => {
    it('shows an span element inside the button when the mousedown event is triggered on it', async () => {
        const template = { template: '<button v-ripple style="width: 100px; height: 100px" />' }
        const { getByRole, getByTestId } = renderFactory(template)
        const button = getByRole('button')

        await fireEvent.mouseDown(button)
        await waitFor(() => expect(button).toContainElement(getByTestId('ripple')))
    })

    it('sets the bg color class passed to v-ripple as a value on the span element', async () => {
        const template = { template: '<button v-ripple="{ class: `ripple-bg-color-class` }" style="width: 100px; height: 100px" />' }
        const { getByRole, getByTestId } = renderFactory(template)
        const button = getByRole('button')

        await fireEvent.mouseDown(button)
        await waitFor(() => expect(getByTestId('ripple')).toHaveClass('ripple-bg-color-class'))
    })
})