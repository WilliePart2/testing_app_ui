import {SET_PAYWAYS_FOR_COMBINATION} from "../actions/actionTypes";

let defaultState = {
    paywaysList: [],
    activePayway: [],
    neededIcon: null
};

export let paywaysReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PAYWAYS_FOR_COMBINATION:
            return {
                ...state,
                paywaysList: [...action.payload]
            };
        default:
            return state;
    }
};
