const removeFromArray = function( arr, ...toRemove ) {
    for (const arg of toRemove) {
        arr = arr.filter( item => item !== arg );
    }
    return( arr );
};

// Do not edit below this line
module.exports = removeFromArray;
