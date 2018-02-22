import React from 'react';
import renderer from 'react-test-renderer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../../redux/reducers';

import MessageCreationContainer from '../';

describe("Container", () => {
    it("render", () => {
        const tree = renderer
            .create(<Provider store={ createStore(reducers) }>
                <MessageCreationContainer />
            </Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})