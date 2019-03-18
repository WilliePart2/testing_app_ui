import React from 'react';
import _ from 'prop-types';
import { List as MUIList, ListItem, ListItemText, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { List, AutoSizer } from 'react-virtualized';

let styles = theme => ({
    listContainer: {
        backgroundColor: theme.palette.paper
    },
    listItem: {
        // margin: `0 ${theme.spacing.unit}px`
    }
});

function VirtualList({ items, rowHeight, classes, onClick }) {
    return (
        <AutoSizer>
            {({width, height}) => (
                <Paper style={{ width, height }}>
                    <List
                        className={classes.listContainer}
                        width={width}
                        height={height}
                        rowCount={items.length}
                        rowHeight={rowHeight}
                        rowRenderer={({index, key, style}) => (
                            <ListItem key={key} button style={{ ...style}} className={classes.listItem}>
                                <ListItemText onClick={() => onClick(index)} primary={items[index]}/>
                            </ListItem>
                        )}
                    />
                </Paper>
            )}
        </AutoSizer>
    );
}

VirtualList.defaultProps = {
    rowHeight: 30,
    onClick: () => {}
};

VirtualList.propTypes = {
    items: _.array.isRequired,
    classes: _.object.isRequired,
    rowHeight: _.number,
    onClick: _.func
};

export default withStyles(styles)(VirtualList);
