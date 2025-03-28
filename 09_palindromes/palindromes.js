const palindromes = function ( str ) {
  str = str.replaceAll( " ", "" ).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
  return( str === str.split( "" ).reverse().join( "" ) );
};

// Do not edit below this line
module.exports = palindromes;
