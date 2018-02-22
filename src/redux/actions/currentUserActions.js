export const Types = {
    USERNAME_CHANGED: "USERNAME_CHANGED"
};

// Actions creators

export const usernameChanged = username => ({
    type: Types.USERNAME_CHANGED,
    payload: {
        username
    }
});