export const Types = {
    RECEIVED: "RECEIVED"
};

// Actions creators

export const received = message => ({
    type: Types.RECEIVED,
    payload: {
        message
    }
});

