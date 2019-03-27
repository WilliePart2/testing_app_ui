import { connect } from 'react-redux';
import { GridMonitorContainer } from "./components/gridMonitorContainer";

let mapStateToProps = state => {
    let payways = state.payways;
    return {
        activeGrid: payways.gridForPayway,
        targetIcon: payways.neededIcon
    };
};

let GridMonitor = connect(
    mapStateToProps,
    dispatch => ({})
)(GridMonitorContainer);

export { GridMonitor };
