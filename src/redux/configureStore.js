import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Locations } from './locations';
import { Reviews } from './reviews';
import { Testemonials } from './testemonials';
import { Hosts } from './hosts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            locations: Locations,
            reviews: Reviews,
            testemonials: Testemonials,
            hosts: Hosts,
            ...createForms({
                feedback: InitialFeedback//next step is to go to MainComponent and import {actions} from react-redux-form
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
