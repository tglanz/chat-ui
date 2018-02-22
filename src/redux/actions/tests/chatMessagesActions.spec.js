import * as chatMessagesActions from '../chatMessagesActions';

describe("chatMessagesActions", () => {
    describe("action creators", () => {
        it("create received action", () => {

            const createdAction = chatMessagesActions.received({
                username: "some username",
                avatar: "some avatar",
                text: "some text"
            });
    
            expect(createdAction).toEqual({
                type: "RECEIVED",
                payload: {
                    message: {
                        username: "some username",
                        avatar: "some avatar",
                        text: "some text"
                    }
                }
            });
        });
    });
});