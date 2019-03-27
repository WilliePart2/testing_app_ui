/**
 *
 * @param {Array<{
 *     icon: number,
 *     iconIndex: number,
 *     zeroBasedStopPosition: number,
 *     oneBasedStopPosition: number
 * }>} reelStopsArray
 * @returns {string}
 */
export let formatReelStop = reelStopsArray => {
    let resultStr = '';
    reelStopsArray.forEach((reelStop, index) => {
        resultStr += `${reelStop.zeroBasedStopPosition}${ index < reelStopsArray.length - 1 ? '-' : '' }`;
    });

    return resultStr;
};

/**
 *
 * @param {Array<
 *  Array<number>
 * >} grid
 */
export let formatGridStops = grid => {
    return formatReelStop(grid);
    // let gridString = '';
    // let tmpStops = [];
    // for (let i = 0; i < 3; i++) {
    //     grid.forEach(reelList => {
    //         tmpStops.push(reelList.shift());
    //     });
    //
    //     gridString += `${formatReelStop(tmpStops)}${i < 3 ? '\n' : ''}`;
    //     tmpStops = [];
    // }
};
