import { createStore, combineReducers} from 'redux';
import { Locations } from './locations';
import { Reviews } from './reviews';
import { Testemonials } from './testemonials';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            locations: Locations,
            reviews: Reviews,
            testemonials: Testemonials
        })
    );
    return store;
}
