function *upper (items) {
      for( item of items) {
        try {
         yield item.toUpperCase();
        } 
        catch(e) {
         yield null;
        }
      }; // your code goes here
}
    
var bad_items = ['a', 'B', 1, 'c'];
    
for (var item of upper(bad_items)) {
  console.log(item);
}

