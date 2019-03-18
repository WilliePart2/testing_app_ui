import React from 'react';
import _ from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { formatReelStop } from "../../common/utils";
import { withStyles } from '@material-ui/core/styles';

let styles = theme => ({
    formContainer: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
    },
    textField: {
        margin: `${theme.spacing.unit}px 0`
    }
});

export function PaywaysDisplay({ activeCombination, getPaywaysForCombination, classes }) {
    return (
        <Paper className={classes.formContainer}>
            <TextField
                disabled
                value={formatReelStop(activeCombination)}
                fullWidth
                className={classes.textField}
            />
            <Grid container justify="center">
                <Button
                    color="secondary"
                    disabled={!activeCombination || !activeCombination.length}
                    onClick={getPaywaysForCombination}
                >
                    Get payways
                </Button>
            </Grid>
        </Paper>
    );
}

PaywaysDisplay.propTypes = {
    activeCombination: _.array.isRequired,
    getPaywaysForCombination: _.func.isRequired,
    classes: _.object.isRequired
};

export default withStyles(styles)(PaywaysDisplay);
