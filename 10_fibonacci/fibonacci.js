

const fibonacci = function( num ) {
  num = Number.parseInt( num );

  if ( num < 0 ) { return( "OOPS" ); }

  // if 0 it should be 0
  if ( num === 0 ) { return( 0 ); }

  // if 1 or 2 it should be 1
  if ( num === 1 || num === 2 ) { return( 1 ); }

  // Fibonacci is the previous seq plus the present
  let prevNum = 1;
  let currNum = 1;
  let fibo = 0;

  for ( let i = 3; i <= num; i++ ) {
    fibo = prevNum + currNum;
    prevNum = currNum;
    currNum = fibo;
  }

  return( fibo );
};

// Do not edit below this line
module.exports = fibonacci;
