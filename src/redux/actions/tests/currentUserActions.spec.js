import * as currentUserActions from '../currentUserActions';

describe("currentUserActions", () => {
    describe("actions creators", () => {
        it("usernameChanged", () => {
            const createdAction = currentUserActions.usernameChanged("some username");

            expect(createdAction).toEqual({
                type: "USERNAME_CHANGED",
                payload: {
                    username: "some username"
                }
            });
        });
    })
})