function askFoo () {
      return new Promise(function (resolve, reject) {
        resolve('foo');
      });
    }
    
 function run (generator) {
      let it = generator();

      let pro = it.next();
      pro.value.then(function (result) {
        it.next(result);
      }).catch(function(error) {
        it.throw(error)
      });
 }
    
 run(function* () {
    // improve: errors?
    try {
      var foo = yield askFoo();
      console.log(foo);
    } catch(error) {
      console.error(error);
   }
 });
