const repeatString = function( stringInp, num ) {
    

    repeatingString = ""
    for ( let i = 0; i < num; i++ ) {
        repeatingString += stringInp;
    }
    if ( num < 0 ){ return( "ERROR" ); }
    return( repeatingString );
};

// Do not edit below this line
module.exports = repeatString;
