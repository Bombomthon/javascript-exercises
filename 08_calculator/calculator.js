const add = function( A, B ) {
  return( A + B );
};

const subtract = function( A, B ) {
  return( A - B );
};

const sum = function( Arr ) {
  return( 
    Arr.reduce( ( sum, currentNum ) => { return( sum + currentNum ); }, 0 )
  );
};

const multiply = function( Arr ) {
  return( 
    Arr.reduce( ( mult, currentNum ) => { return( mult * currentNum ); } )
  );
};

const power = function( A, B ) {
  const arr = Array.apply( null, Array( B ) ).map( ( x ) => { return( A ); } );
  return( 
    arr.reduce( 
      ( total, x ) => { return( total * x ); } 
  ));
};

const factorial = function( A ) {
  let num = 1;
  for ( let i = 1; i <= A; i++ ) {
    num = num * i;
  }
  return( num );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
