import React from 'react';
import _ from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export class PaywaysInfoPanel extends React.Component {
    static propTypes = {
        stopCount: _.number.isRequired
    };
    render() {
        return (
                <Paper>
                    <Typography variant="headline" align="center" gutterBottom>
                        Stops for grid
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="subheading" align="center">
                        Stops count: {this.props.stopCount}
                    </Typography>
                </Paper>
        );
    }
}
