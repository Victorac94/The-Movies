import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Tag from './Tag';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should always render tag name', () => {
    act(() => {
        render(<Tag name="Ciencia ficción" />, container);
    })
    expect(container.textContent).toBe('Ciencia ficción');

    act(() => {
        render(<Tag name="" />, container);
    })
    expect(container.textContent).toBe('');
})