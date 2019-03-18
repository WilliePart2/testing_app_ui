import { combinationReducer } from "./reducers/combinationReducer";
import { paywaysReducer } from "./reducers/paywaysReducer";

export let rootReducer = (state = {}, action) => {
    return {
        combinations: combinationReducer(state.combinations, action),
        payways: paywaysReducer(state.payways, action)
    };
};
