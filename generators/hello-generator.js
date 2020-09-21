function *range(from, to) {
      for( let i = from; i<= to; i++ ) {
         yield i;
      } // your code goes here
}
    
for (var r of range(5, 10)) {
  console.log( r );
}

