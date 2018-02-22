import { Types } from '../actions/currentUserActions';

const initialState = {
    username: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case Types.USERNAME_CHANGED:
            return {...state, username: action.payload.username };
        default:
            return state;
    }
}