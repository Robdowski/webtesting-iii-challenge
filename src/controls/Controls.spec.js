// Test away!
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'

test('Controls renders without crashing', () => {
    render(<Controls />)
})