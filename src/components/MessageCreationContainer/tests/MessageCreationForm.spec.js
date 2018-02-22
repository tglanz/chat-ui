import React from 'react';
import renderer from 'react-test-renderer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../../redux/reducers';

import { Unconnected as MessageCreationForm } from '../MessageCreationForm';

describe("MessageCreationForm", () => {
    it("snapshot", () => {

        const tree = renderer
            .create(<Provider store={ createStore(reducers) }>
                <MessageCreationForm
                    username="some username" text="some text" avatar="some avatar"/>
            </Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})