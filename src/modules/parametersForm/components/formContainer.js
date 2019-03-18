import React from 'react';
import _ from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

let styles = theme => ({
    fieldsContainer: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
    },
    textField: {
        margin: `0 0 ${theme.spacing.unit}px 0`
    },
    divider: {
        margin: `${theme.spacing.unit}px 0`
    }
});

class FormContainer extends React.Component {
    static propTypes = {
        getAllCombinations: _.func.isRequired,
        // computePaywaysFromCombination: _.func.isRequired,
        classes: _.object.isRequired
    };

    state = {
        username: '',
        gameCode: '',
        isAnonimouse: true,
        findCombinationsWithWilds: true,
        combinationLength: '',
        iconIndex: ''
    };

    handleInput = fieldName => event => {
        this.setState({ [fieldName]: event.target.value.trim() })
    };

    getAllCombinations = () => {
        let { iconIndex, combinationLength, findCombinationsWithWilds } = this.state;
        this.props.getAllCombinations({
            findCombinationsWithWilds,
            iconIndex: parseInt(iconIndex, 10),
            combinationLength: parseInt(combinationLength, 10)
        });
    };

    get isAllParametersValid() {
        let { iconIndex, combinationLength } = this.state;
        return (
            (iconIndex > 0 && iconIndex < 11) &&
            (combinationLength > 2 && combinationLength < 6)
        );
    }

    render() {
        let { classes } = this.props;
        return (
                <Paper className={classes.fieldsContainer}>
                    <TextField
                        label="Username"
                        value={this.state.username}
                        variant="outlined"
                        onChange={this.handleInput('username')}
                        fullWidth
                        className={classes.textField}
                        disabled
                    />
                    <TextField
                        label="Game code"
                        value={this.state.gameCode}
                        variant="outlined"
                        onChange={this.handleInput('gameCode')}
                        fullWidth
                        className={classes.textField}
                        disabled
                    />
                    <TextField
                        label="Combination length"
                        value={this.state.combinationLength}
                        onChange={this.handleInput('combinationLength')}
                        fullWidth
                        variant="outlined"
                        className={classes.textField}
                    />
                    <TextField
                        label="Icon index"
                        min={1}
                        max={10}
                        value={this.state.iconIndex}
                        onChange={this.handleInput('iconIndex')}
                        variant="outlined"
                        fullWidth
                    />
                    <Divider className={classes.divider} />
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Tool options</FormLabel>
                                <RadioGroup
                                    label="Game mode"
                                    value={this.state.isAnonimouse}
                                    onChange={this.handleInput('isAnonimouse')}
                                >
                                    <FormControlLabel
                                        label="Fun"
                                        value="true"
                                        control={<Radio />}
                                    />
                                    <FormControlLabel
                                        label="Real"
                                        value="false"
                                        control={<Radio />}
                                    />
                                </RadioGroup>
                                <RadioGroup
                                    label="Parameters"
                                    value={this.state.findCombinationsWithWilds}
                                    onChange={this.handleInput('findCombinationsWithWilds')}
                                >
                                    <FormControlLabel
                                        label="Find combinations with wild"
                                        value="true"

                                        control={<Radio checked />}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container spacing={8}>
                        <Grid item container xs={12} justify="center" >
                            <Button
                                color="primary"
                                onClick={this.getAllCombinations}
                                disabled={!this.isAllParametersValid}
                            >
                                Get all combinations
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
        );
    }
}

export default withStyles(styles)(FormContainer);
