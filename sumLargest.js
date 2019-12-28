let sumLargestNumbers = function ( data ) 
{
  let large = 0 ;
  let large2 = 0 ;
  for ( let i = 0 ; i < data.length ; i++ )
  {
    if ( data [ i ] > large )
    {
      large = data [ i ] ;
    }
  }

  for ( let j = 0 ; j < data.length ; j++ )
{
  if ( data [ j ] < large && data [ j ] > large2 )
  {
    large2 = data [ j ] ;
  }

}
let sum = large + large2 ;
return ( sum ) ;
} ;
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));