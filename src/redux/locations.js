import * as ActionTypes from './ActionTypes';

export const Locations = (state = { isLoading: true,
    errMsg: null,
    locations:[]}, action) => {
    switch(action.type) {
        case ActionTypes.LOCATIONS_LOADING:
            return {...state, isLoading: true, errMsg: null, locations: []}

        case ActionTypes.LOCATIONS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};
     
        default:
            return state;
    }
};