import { combineReducers } from 'redux';

import chatMessages from './chatMessagesReducer';
import currentUser from './currentUserReducer';

export default combineReducers({
    chatMessages,
    currentUser
});