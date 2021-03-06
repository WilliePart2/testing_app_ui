import {
    SET_ALL_POSSIBLE_COMBINATIONS,
    SET_COMBINATION_AS_ACTIVE,
    SET_COMBINATION_LENGTH
} from "../actions/actionTypes";

let defaultState = {
    totalCombinationsList: [],
    possibleStops: [],
    activeCombination: [],
    combinationLength: 0
};

export let combinationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_POSSIBLE_COMBINATIONS:
            return {
                ...state,
                totalCombinationsList: [...action.payload]
            };
        /**
         * Active combination which we select from computed
         */
        case SET_COMBINATION_AS_ACTIVE:
            return {
                ...state,
                activeCombination: action.payload
            };
        /**
         * Length of payway which we compute
         */
        case SET_COMBINATION_LENGTH:
            return {
                ...state,
                combinationLength: action.payload
            };
        default:
            return state;
    }
};
