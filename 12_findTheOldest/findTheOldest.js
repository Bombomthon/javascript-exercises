const findTheOldest = function( peopleArray ) {
  //Create array with all the ages
  const currentYear = new Date().getFullYear();
  let maxValue = 0
  let maxIdx = 0;
  let val = 0;

  for ( let i = 0; i < peopleArray.length; i++ ) {

    if ( peopleArray[ i ].yearOfDeath === undefined ) { 
      peopleArray[ i ].yearOfDeath = currentYear 
    }

    val = peopleArray[ i ].yearOfDeath - peopleArray[ i ].yearOfBirth;

    if ( maxValue < val ) {
      maxValue = val;
      maxIdx = i;
    }
    
  }

  //return the object with the oldest person
  return( peopleArray[ maxIdx ] );
};

// Do not edit below this line
module.exports = findTheOldest;
