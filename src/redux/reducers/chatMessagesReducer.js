import { Types } from '../actions/chatMessagesActions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case Types.RECEIVED:
            return state.concat(action.payload.message);
        default:
            return state;
    }
}