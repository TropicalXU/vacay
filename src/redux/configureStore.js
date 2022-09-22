import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Locations } from './locations';
import { Reviews } from './reviews';
import { Testemonials } from './testemonials';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            locations: Locations,
            reviews: Reviews,
            testemonials: Testemonials
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
