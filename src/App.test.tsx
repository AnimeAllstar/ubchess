import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
    render(<App/>);
    const text = screen.getByText(/ubchess/i);
    expect(text).toBeInTheDocument();
});
