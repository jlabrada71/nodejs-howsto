var fs = require('fs');
    
function run (listDirectoryIterator) {
  var it = listDirectoryIterator(returnResultToIterator);  // this is not a function call, it's just an iterator declaration.
    
  function returnResultToIterator (err, files) {
    console.log('entered returnResultToIterator with result ' + files );
    it.next({err, files});  // when no parameter is received, {null, null} is sent back to iterator, (first call)
                             // when values are passed by readdir, they are returned back to iterator. (second call)
  }
    
  returnResultToIterator();  
}

function*  listDirectoryIterator(resultReturner) {
  console.log('entered listDirectory(resultReturner)');
      
  var result  = yield fs.readdir('.', resultReturner);  // this doesn't yields anything, just executes fs.readdir
                                                      // which latter, calls resultReturner, passing through err and result as 
                                                      // parameters. 
                                                      // resultReturner sends back both parameters which 
                                                      // which then are processed 
  if(result.err != undefined) {
     console.log('error occurred');
     console.error(result.err); 
  }
  else {
    console.log('result');
    console.log(result.files); // [ 'look_sync_do_async', ..., 'run_stop_run' ];
  }
  
}
    
run(listDirectoryIterator);
