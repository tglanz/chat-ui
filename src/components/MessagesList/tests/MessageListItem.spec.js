import React from 'react';
import renderer from 'react-test-renderer';

import MessageListItem from '../MessageListItem';

describe("MessageListItem", () => {
    it("snapshot", () => {

        const tree = renderer
            .create(<MessageListItem
                username="some username" text="some text" avatar="some avatar"/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})