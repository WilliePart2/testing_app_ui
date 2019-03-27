import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ParametersForm, PaywaysDisplay } from "./modules/parametersForm";
import { Combinations } from "./modules/combinations";
import { Payways, PaywaysInfo } from "./modules/paywaysDisplay";
import { GridMonitor } from "./modules/gridMonitor";

let styles = theme => {
    let commonPadding = `${theme.spacing.unit}px`;
    return {
        mainScreen: {
            padding: `${commonPadding} ${commonPadding} 0 ${commonPadding} `
        },
        zeroGrowItem: {
            flexGrow: 0
        },
        growItem: {
            flexGrow: 1
        }
    };
};

class App extends Component {
  render() {
      let {classes} = this.props;
      return (
          <Grid container spacing={8} className={`fullHeight ${classes.mainScreen}`}>
              <Grid item xs={2}>
                  <Grid direction="column" container spacing={8} className="fullHeight">
                      <Grid item xs className={classes.zeroGrowItem}>
                          <ParametersForm />
                      </Grid>
                      <Grid item xs className={classes.zeroGrowItem}>
                          <PaywaysDisplay />
                      </Grid>
                      <Grid item xs className={classes.growItem}>
                          <Combinations />
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={8}>
                  {/*<Paper>*/}
                      <GridMonitor />
                  {/*</Paper>*/}
              </Grid>
              <Grid item xs={2}>
                  <Grid container direction="column" spacing={8} className="fullHeight">
                      <Grid item xs className={classes.zeroGrowItem}>
                          <PaywaysInfo />
                      </Grid>
                      <Grid item xs className={classes.growItem}>
                        <Payways />
                      </Grid>
                  </Grid>
              </Grid>
          </Grid>
      );
  }
}

export default withStyles(styles)(App);
