const sumAll = function( startNum, endNum ) {

    if (typeof( startNum ) !== "number") { return( "ERROR" ); }
    if !( Number.isInteger( startNum ) ) { return( "ERROR" ); }
    if (typeof( endNum ) !== "number")   { return( "ERROR" ); }
    if !( Number.isInteger( endNum ) )   { return( "ERROR" ); }
    
    let sumNum = 0;
    let num = startNum;
    
    while ( num <= endNum ){
        sumNum += num;
	num++;
    }
    if ( startNum > endNum ){ return( "ERROR" ); }
    return( sumNum );
};

// Do not edit below this line
module.exports = sumAll;
