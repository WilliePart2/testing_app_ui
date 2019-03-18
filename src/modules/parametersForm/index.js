import FormContainer from "./components/formContainer";
import PaywausDisplayContainer from './components/paywaysDisplay';
import { connect } from 'react-redux';
import { getAllCombinationsForIcon } from "../store/actions/getAllCombinationsForIcon";
import {getPaywaysForCombination} from "../store/actions/getPaywaysForCombination";

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => {
    return {
        getAllCombinations: ({
            iconIndex,
            combinationLength,
            findCombinationsWithWilds
        }) => {
            return dispatch(getAllCombinationsForIcon(
                iconIndex,
                combinationLength,
                findCombinationsWithWilds
            ));
        }
    }
};

let ParametersForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);

let mapStateForPaywaysDisplay = state => {
    let combinations = state.combinations;
    return {
        activeCombination: combinations.activeCombination
    };
};

let mapDispatchForPaywaysDispay = dispatch => {
    return {
        getPaywaysForCombination: (combination) => {
            dispatch(getPaywaysForCombination(combination))
        }
    }
};

let PaywaysDisplay = connect(
    mapStateForPaywaysDisplay,
    mapDispatchForPaywaysDispay
)(PaywausDisplayContainer);

export { ParametersForm, PaywaysDisplay };
