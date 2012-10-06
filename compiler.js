// Returns true if obj is an Array, false otherwise.
var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

// Returns true if item is in array.
var inArray = function(array, item) {
  for(var i = 0; i < array.length; i++)
    if (array[i] === item) return true;
  return false;
}

// Returns the compiled JSONScript as a string of Javascript source.
var compile = function(expression) {

  var operators = ['*', '+'];

  if (isArray(expression)) {

    var fn_name = expression[0];
    var fn_args = expression.slice(1);

    var compiled_args = [];

    for (var i = 0; i < fn_args.length; i++)
      compiled_args.push(compile(fn_args[i]));

    if(inArray(operators, fn_name)) {
      return compiled_args.join(fn_name);
    } else {
      return fn_name + "(" + compiled_args.join(',') + ")";
    }

  } else {
    return expression.toString()
  }
}
