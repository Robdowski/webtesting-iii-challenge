// Test away!
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

test('Defaults to open and unlocked, displays unlocked and open' , () => {
    const { getByTestId } = render(<Display />)
    
    const locked = getByTestId('locked-display')
    const closed = getByTestId('closed-display')

    expect(locked).toHaveTextContent(/^unlocked$/i)
    expect(locked).toHaveClass('green-led')
    expect(closed).toHaveTextContent(/^open$/i)
    expect(closed).toHaveClass('green-led')
})

test('displays closed if the closed prop is true and locked if the locked prop is true, also displays red led on both', () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />);

    const locked = getByTestId('locked-display')
    const closed = getByTestId('closed-display')

    expect(locked).toHaveTextContent(/^locked$/i)
    expect(locked).toHaveClass('red-led')
    expect(closed).toHaveTextContent(/^closed$/i)
    expect(closed).toHaveClass('red-led')
})





