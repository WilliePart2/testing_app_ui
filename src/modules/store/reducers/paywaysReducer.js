import {
    DISPLAY_GRID_FOR_PAYWAY,
    SET_ACTIVE_ICON_INDEX,
    SET_GRID_FOR_PAYWAY,
    SET_PAYWAYS_FOR_COMBINATION
} from "../actions/actionTypes";

let defaultState = {
    gridForPayway: [[]],
    paywaysList: [],
    activePayway: [],
    neededIcon: null
};

export let paywaysReducer = (state = defaultState, action) => {
    switch (action.type) {
        /**
         * Set possible combination for certain grid computed from payway
         */
        case SET_PAYWAYS_FOR_COMBINATION:
            return {
                ...state,
                paywaysList: [...action.payload]
            };
        /**
         * Set grid for selected payway
         */
        case SET_GRID_FOR_PAYWAY:
            return {
                ...state,
                gridForPayway: [ ...action.payload ]
            };
        case DISPLAY_GRID_FOR_PAYWAY:
            return {
                ...state,
                activePayway: [ ...action.payload ]
            };
        case SET_ACTIVE_ICON_INDEX:
            return {
                ...state,
                neededIcon: action.payload
            };
        default:
            return state;
    }
};
