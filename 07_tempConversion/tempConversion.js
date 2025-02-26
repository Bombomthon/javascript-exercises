
function roundDecimal( num ) {
    if ( typeof( num ) !== "number" ) { return( "ERROR" ); }
    return( Math.round( num * 10 ) / 10 );
};

const convertToCelsius = function( temp ) {
    if ( typeof( temp ) !== "number" ) { return( "ERROR" ); }
    return( roundDecimal( (temp -32) * 5/9 ) );
};

const convertToFahrenheit = function( temp ) {
    if ( typeof( temp ) !== "number" ) { return( "ERROR" ); }
    return( roundDecimal( (temp* 9/5) + 32 ) );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
