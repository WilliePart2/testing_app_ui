import { makePostRequest } from "../../api/core";
import {SET_ALL_POSSIBLE_COMBINATIONS, SET_COMBINATION_LENGTH} from "./actionTypes";

let setCombinationToStorage = combinations => ({
    type: SET_ALL_POSSIBLE_COMBINATIONS,
    payload: combinations
});

let setCombinationLengthForActiveCombination = combinationLength => ({
    type: SET_COMBINATION_LENGTH,
    payload: combinationLength
});

export let getAllCombinationsForIcon = (
    iconIndex,
    combinationLength,
    findCombinationsWithWilds
) => async dispatch => {
    let response = await makePostRequest('/findCombinations', {
        combinationLength,
        iconIndex,
        findCombinationsWithWilds,
        needToGetConfig: true
    });

    if (!response) {
        return false;
    }

    dispatch(setCombinationLengthForActiveCombination(combinationLength));
    dispatch(setCombinationToStorage(response.body));
    return true;
};
