import React from 'react';
import _ from 'prop-types';
import VirtualList from '../../common/components/virtualList';
import { formatGridStops, formatReelStop } from "../../common/utils";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export class PaywaysContainer extends React.Component {
    static propTypes = {
        paywaysList: _.arrayOf(_.object).isRequired,
        displayGridFromStops: _.func.isRequired
    };

    onStopPositionSelected = index => {
        this.props.displayGridFromStops(this.props.paywaysList[index]);
    };

    render() {
        let { paywaysList } = this.props;
        return (
            <VirtualList
                items={paywaysList.map(stops => formatReelStop(stops))}
                onClick={this.onStopPositionSelected}
            />
        );
    }
}
