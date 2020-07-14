import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import Menu from './Menu';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should render all genres depending on the selected language', async () => {
    const dataReducer = {
        movieGenres: {
            1: 'Action and Adventure',
            2: 'Comedy',
            3: 'Romantic',
            4: 'Horror'
        }
    }

    jest.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(dataReducer.movieGenres)
        })
    })

    // Apply resolved promises
    await act(async () => {
        await render(connect(
            <Menu dataReducer={dataReducer} />
        ), container);
    })

    expect(container.querySelector('select')).toContain(dataReducer.movieGenres);

    axios.get.mockRestore();
});