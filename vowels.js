let numberOfVowels = function ( data )
{
  let vowels = 0 ;
  let word = data ;
    for ( let i = 0 ; i < word.length ; i++ )
      {
        if ( ( word.charAt ( i ) === "a" ) || ( word.charAt ( i ) === "e" ) ||
        ( word.charAt ( i ) === "i" ) || ( word.charAt ( i ) === "o" ) || ( word.charAt ( i ) === "u" ) )
        {
          vowels = vowels + 1 ;
        }
  
      }
return(vowels);
} ;
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));