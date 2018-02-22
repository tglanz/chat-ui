import reduce from '../currentUserReducer';

describe("currentUserReducer", () => {
    describe("reduce", () => {
        it("check initial state, reduce with unknown action type, state should remain unchanged", () => {
            const state = reduce(undefined, {
                type: "some type",
                payload: "some payload"
            });

            expect(state).toEqual({ username: "" });
        });

        it("check initial state, username changed action, state should contain the new username", () => {
            const state = reduce(undefined, {
                type: "USERNAME_CHANGED",
                payload: {
                    username: "some username"
                }
            });

            expect(state).toEqual({ username: "some username" });
        });


        it("reduce, unknown type, state should remain the same", () => {
            const initialState = ["some value"];

            const state = reduce(initialState, {
                type: "some action type",
                payload: "some payload"
            });

            expect(state).toEqual(initialState);
        });


        it("reduce, username changed action, state should be modified to have the new username", () => {
            const initialState = {
                username: "some old username"
            };

            const state = reduce(initialState,  {
                type: "USERNAME_CHANGED",
                payload: {
                    username: "some new username"
                }
            });

            expect(state).toEqual({
                username: "some new username"
            });
        });
    });

    // selectors etc will also be tested here
})