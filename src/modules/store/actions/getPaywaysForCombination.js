import {makePostRequest} from "../../api/core";
import {SET_PAYWAYS_FOR_COMBINATION} from "./actionTypes";

let setPaywaysForCombination = grids => ({
    type: SET_PAYWAYS_FOR_COMBINATION,
    payload: grids
});

export let getPaywaysForCombination = () => async (dispatch, getState) => {
    let  state = getState(),
        combinations = state.combinations,
        activeCombination = combinations.activeCombination,
        combinationLength = combinations.combinationLength;

    let response = await makePostRequest('/computePayways', {
        combinationLength,
        stopsForComputingPayways: activeCombination
    });

    if (!response || !response.body) {
        return false;
    }

    dispatch(setPaywaysForCombination(response.body.combinations));
    return true;
};
