import { CombinationsContainer } from "./components/combinationsContainer";
import { connect } from 'react-redux';
import {setCombinationAsActive} from "../store/actions/setCombinationAsActive";

let mapStateToProps = state => {
    let combinations = state.combinations;

    return {
        combinationList: combinations.totalCombinationsList
    };
};

let mapDispatchToProps = dispatch => {
    return {
        setCombinationAsActive: (combination) => {
            dispatch(setCombinationAsActive(combination))
        }
    }
};

let Combinations = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombinationsContainer);

export { Combinations };
