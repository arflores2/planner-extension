/**
 * Extend function
 */
function extend(subClass, superClass) {
  var F = function() {};
  var protoCopy = $.extend({}, subClass.prototype);
  F.prototype = superClass.prototype;

  for(var key in F.prototype) {
    if(! protoCopy.hasOwnProperty(key) ) {
      subClass.prototype[key] = {};
    }
  }

  $.extend(true, subClass.prototype, new F());
  $.extend(true, subClass.prototype, protoCopy);
  //subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}