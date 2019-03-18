import React from 'react';
import _ from 'prop-types';
import VirtualList from "../../common/components/virtualList";
import {formatReelStop} from "../../common/utils";

export class CombinationsContainer extends React.Component {
    static propTypes = {
        combinationList: _.array.isRequired,
        setCombinationAsActive: _.func.isRequired
    };

    onCombinationSelect = combinationIndex => {
        this.props.setCombinationAsActive(
            this.props.combinationList[combinationIndex]
        )
    };

    render() {
        let { combinationList } = this.props;
        return (
            <VirtualList
                items={
                    combinationList.map(combination => formatReelStop(combination))
                }
                onClick={this.onCombinationSelect}
            />
        );
    }
}