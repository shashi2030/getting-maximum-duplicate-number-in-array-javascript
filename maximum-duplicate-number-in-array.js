var arr = [1,5,5,5,5,6,8,5,1,89,5,5,5,5,5,5],
result  = {}, 
max     = 0, 
res;

for( var i = 0; i < arr.length; ++i ) {
  var val = arr[i],
    inc = ( result[val] || 0 ) + 1;
    
    result[val] = inc;

    if( inc > max ) { 
      max = inc;
      res = val;
  }
}
console.log(result);