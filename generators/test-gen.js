function *foo () {
      console.log('entered foo');
      var stop = yield 'woo';
      console.log(stop, 'inside foo');
    }
console.log('starting');
    var G = foo();
console.log('after assigning G=foo()');
  
 console.log( G.next() );
console.log('envia para adentro el valor bar')
console.log( G.next('bar') );

