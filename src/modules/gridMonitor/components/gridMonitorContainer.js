import React from 'react';
import _ from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

export class GridMonitorContainer extends React.Component {
    static propTypes = {
        activeGrid: _.arrayOf(_.arrayOf(_.number)).isRequired,
        targetIcon: _.number
    };

    render() {
        return (
            <Grid
                container
                spacing={8}
                justify="space-between"
                direction="row"
                wrap={false}
            >
                {this.props.activeGrid.map(reel => {
                    return (
                        <Grid item xs={2}>
                            <Grid container spacing={24} direction="column" style={{height: '500px'}}>
                                {reel.map(icon => (
                                    <Grid item xs >
                                        <Paper style={{
                                            height: '100%',
                                            backgroundColor: icon === this.props.targetIcon ? 'red' : undefined,
                                            textAlign: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {icon}
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}
