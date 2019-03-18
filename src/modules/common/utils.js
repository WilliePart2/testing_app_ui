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
