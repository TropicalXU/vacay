import * as ActionTypes from './ActionTypes'

export const Locations = (state = {
    isLoading: true,
    errMsg: null,
    locations: []

}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LOCATIONS:
            return {...state, isLoading: false, errMsg: null, locations: action.payload };
        
        case ActionTypes.LOCATIONS_LOADING:
            return {...state, isLoading: true, errMsg: null, locations: []};

        case ActionTypes.LOCATIONS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, locations: []};

        default:
            return state;
    }
};