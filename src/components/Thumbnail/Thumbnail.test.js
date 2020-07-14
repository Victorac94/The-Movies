import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import Thumbnail from './Thumbnail';

jest.mock

let container = null;
beforeEach(() => {
    // Setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // Cleanup before exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should always render an image', () => {
    const fakePerson = {
        pic: '/path/to/pic.jpg',
        name: 'Victor',
        job: 'Developer',
        mode: 'person',
        id: 123
    }

    act(() => {
        render(
            <MemoryRouter>
                <Thumbnail {...fakePerson} />
            </MemoryRouter>
            , container);
    })

    expect(
        container.querySelector('a').getAttribute('href')
    ).toBe(`/${fakePerson.mode}/${fakePerson.id}/details`);

    expect(
        container.querySelector('img').getAttribute('src')
    ).toBe('https://image.tmdb.org/t/p/w185' + fakePerson.pic);

    expect(
        container.querySelector('p.Thumbnail__name').getAttribute('title')
    ).toBe(fakePerson.name);

    expect(
        container.querySelector('p.Thumbnail__name').textContent
    ).toBe(fakePerson.name);
});