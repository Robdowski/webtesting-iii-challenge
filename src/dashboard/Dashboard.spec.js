import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

// Test away

test('App renders correctly', () =>{
    render(<Dashboard />)
})

test('shows the controls and display' , () => {
    const { getByText } = render(<Dashboard />)

    getByText(/^close gate$/i) // Shows that button is rendered
    getByText(/^open$/i) // Shows that display is rendering
})

/*
test('Displays closed if the closed prop is true and open otherwise', async () => {
    const { getByTestId } = render(<Dashboard />)
    // DOOR IS OPEN AND UNLOCKED
    const locked = getByTestId('locked-display')
    const closed = getByTestId('closed-display')
    expect(closed).toHaveTextContent(/^open$/i)
    expect(locked).toHaveTextContent(/^unlocked$/i)

    await fireEvent.click(getByTestId('close-button')) // CLOSE DOOR, STILL UNLOCKED
    .then(expect(closed).toHaveTextContent(/^closed$/i))
    .then(expect(locked).toHaveTextContent(/^unlocked$/i))

    await fireEvent.click(getByTestId('lock-button')) // DOOR CLOSED & LOCKED
    .then(expect(closed).toHaveTextContent(/^closed$/i))
    .then(expect(locked).toHaveTextContent(/^locked$/i))

    await fireEvent.click(getByTestId('closed-button')) // TRY TO OPEN DOOR, SHOULD NOT WORK BECAUSE LOCKED
    .then(expect(closed).toHaveTextContent(/^closed$/i))
    .then(expect(locked).toHaveTextContent(/^locked$/i))

})
*/
