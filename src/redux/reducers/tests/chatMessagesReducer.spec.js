import reduce from '../chatMessagesReducer';

describe("chatMessagesReducer", () => {
    describe("reduce", () => {
        it("check initial state, reduce with unknown action type, state should remain unchanged", () => {
            const state = reduce(undefined, {
                type: "some type",
                payload: "some payload"
            });

            expect(state).toEqual([]);
        });

        it("check initial state, message received action, state should contain the message", () => {
            const state = reduce(undefined, {
                type: "RECEIVED",
                payload: {
                    message: {
                        username: "some username",
                        text: "some text",
                        avatar: "some avatar"
                    }
                }
            });

            expect(state).toEqual([{
                username: "some username",
                text: "some text",
                avatar: "some avatar"
            }]);
        });

        it("reduce, unknown type, state should remain the same", () => {
            const initialState = ["some value"];

            const state = reduce(initialState, {
                type: "some action type",
                payload: "some payload"
            });

            expect(state).toEqual(initialState);
        });

        it("reduce, message received action, state should add the message to the state", () => {
            const initialState = ["some value"];

            const state = reduce(initialState,  {
                type: "RECEIVED",
                payload: {
                    message: {
                        username: "some username",
                        text: "some text",
                        avatar: "some avatar"
                    }
                }
            });

            expect(state).toEqual([
                "some value", // we don't check the validity of states here, only the reduce itself
                {
                    username: "some username",
                    text: "some text",
                    avatar: "some avatar"
                }
            ]);
        });
    });

    // selectors etc will also be tested here
})