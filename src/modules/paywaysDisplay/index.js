import { PaywaysContainer } from "./components/paywaysContainer";
import { PaywaysInfoPanel } from "./components/paywaysInfoPanel";
import { connect } from 'react-redux';
import { displayGridForPayway } from "../store/actions/displayGridForPayway";

let mapStateToProps = state => {
    let payways = state.payways;

    return {
        paywaysList: payways.paywaysList
    };
};

let mapDispatchToProps = dispatch => {
    return {
        displayGridFromStops: paywayStops => {
            return dispatch(displayGridForPayway(paywayStops));
        }
    };
};

let Payways = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaywaysContainer);

let PaywaysInfo = connect(
    state => ({
        stopCount: state.payways.paywaysList ? state.payways.paywaysList.length : 0
    }),
    dispatch => ({})
)(PaywaysInfoPanel);

export { Payways, PaywaysInfo };
