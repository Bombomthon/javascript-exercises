const getTheTitles = function( books ) {

  let numBooks = books.length;
  let arrBooks = [];

  for ( let i = 0; i < numBooks; i++ ) {
    arrBooks.push( books[ i ].title );
  }

  return( arrBooks )
};

// Do not edit below this line
module.exports = getTheTitles;
