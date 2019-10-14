// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'


test('Does not open when locked', () => {
    const { getByTestId } = render(<Controls closed={true} locked={true} />)

    const closeButton = getByTestId('close-button')
    const lockButton = getByTestId('lock-button')
    
    expect(closeButton).toHaveAttribute('disabled')
    expect(closeButton).toHaveTextContent(/^open gate$/i)
    expect(lockButton).not.toHaveAttribute('disabled')
    expect(lockButton).toHaveTextContent(/^unlock gate$/i)

    fireEvent.click(closeButton) // SHOWING THAT BUTTON DOES NOT WORK

    expect(closeButton).toHaveAttribute('disabled')
    expect(closeButton).toHaveTextContent(/^open gate$/i)
})

test('Not lockable when opened', () => {
    const { getByTestId } = render(<Controls close={false} locked={false} />)

    const closeButton = getByTestId('close-button')
    const lockButton = getByTestId('lock-button')

    expect(closeButton).not.toHaveAttribute('disabled')
    expect(closeButton).toHaveTextContent(/^close gate$/i)
    expect(lockButton).toHaveAttribute('disabled')
    expect(lockButton).toHaveTextContent(/^lock gate$/i)

    fireEvent.click(lockButton) // SHOWING THAT NOT ABLE TO LOCK WHILE OPEN 

    expect(lockButton).toHaveAttribute('disabled')
    expect(lockButton).toHaveTextContent(/^lock gate$/i)
})