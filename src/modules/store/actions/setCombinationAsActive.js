import {SET_COMBINATION_AS_ACTIVE} from "./actionTypes";

export let setCombinationAsActive = combination => ({
    type: SET_COMBINATION_AS_ACTIVE,
    payload: combination
});
