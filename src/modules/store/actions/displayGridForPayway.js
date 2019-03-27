import { SET_GRID_FOR_PAYWAY } from "./actionTypes";
import { makePostRequest } from "../../api/core";

export let displayGridForPayway = paywayStops => async dispatch => {
    let response = await makePostRequest('/get-grid-from-stops', {
        needToGetConfig: true,
        stopsForComputingGrid: paywayStops
    });

    if (!response || !response.body) {
        return false;
    }

    dispatch({
        type: SET_GRID_FOR_PAYWAY,
        payload: response.body
    });
    return true;
};
