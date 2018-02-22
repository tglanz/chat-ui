import { createStore } from 'redux';
import reducers from './reducers';
    
export default () => {
    // middlewares here
    return createStore(reducers);
}