var BrowserAction = function(config) {
  config = config || {};

  var me = this;

  var index = 0;

  function _alert(increment) {
  	//get last count
    me.view.BrowserAction.getBadgeText({}, function(badgeNumber) {
      try{
        if(badgeNumber === "") throw 'empty string'

        var tmp = parseInt(badgeNumber);

        if(typeof tmp !== 'number') throw 'Not a Number'          

        index = 1 + tmp;
      }
      catch(e) {
        index = 1;
      }

      me.view.BrowserAction.setBadgeText({
        text: index.toString()
      });
    });
  }

  return $.extend(this, {
  	alert: _alert
  }, chrome.browserAction);
}