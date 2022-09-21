import { REVIEWS } from "../shared/reviews";
import * as ActionTypes from './ActionTypes';

export const Reviews = (state = REVIEWS, action) => {
    switch(action.type) {

        case ActionTypes.ADD_REVIEW:
        const review = action.payload;
        review.id = state.length;
        review.date = new Date().toISOString();
        console.log("Comment: ", review);
        return state.concat(review);

        default:
            return state;
    }
};