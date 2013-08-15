/**
 * Observable
 * Utility object used for adding listeners and callbacks for
 * custom events
 */
var Observable = function(config) {
  config = config || {};

  this.listeners = {};

  var _listeners = config.listeners || [];

  /**
   * _addListeners
   * add listeners in the config
   * @param [{String}, ..]
   * [
   *  "click",
   *  "open",
   *  "load"
   * ]
   * @return null
   */
  function _addListeners(listeners) {
    var e;

    for(var i = 0, len = listeners.length; i < len; ++i) {
        e = listeners[i];
        if(typeof e === 'string' && !this.listeners.hasOwnProperty(e)) {
          this.listeners[e] = [];
        }
    }
  }

  _addListeners(_listeners);
};

Observable.prototype = {

  clearListeners: function(event) {
    if(this.listeners.hasOwnProperty(event)) {
      this.listeners[event] = [];
    }
  },

  removeListener: function(event, namespace) {
    if(this.listeners.hasOwnProperty(event) && this.listeners[event].hasOwnProperty(namespace)) {
      delete this.listeners[event][namespace];
    }
  },

  /**
   * addListener
   * add event and callback to this.listeners object
   * @param event {String}
   * @param callback {Function}
   * @return null
   */
  addListener: function(event, callback, namespace) {
    namespace = namespace || 'global';

    if(this.listeners.hasOwnProperty(event) && this.listeners[event].hasOwnProperty(namespace) && typeof callback == 'function') { // add function to event and namespace
      this.listeners[event][namespace].push(callback);
      //this.listeners[event].push(callback);
    }
    else if(this.listeners.hasOwnProperty(event) && typeof callback == 'function') { //event is present but with namespace needs to be added
      this.listeners[event][namespace] = [];
      this.listeners[event][namespace].push(callback);
    }
    else if( typeof callback == 'function') { //add event and namespace
      this.listeners[event] = {};
      this.listeners[event][namespace] = [];
      this.listeners[event][namespace].push(callback);
    }
    else {
      //callback is not a function
      console.log('callback is expected to be function', callback, typeof callback);
    }
  },

  /**
   * notify
   * execute all callbacks for event in this.listeners
   * @param event {String}
   * @param args [{Anything}, ..]
   * @param item {Anything}
   * @return null
   */
  notify: function(event, args, item) {
    var _args,
        _namespace,
        _fnList;
        
    if(this.listeners.hasOwnProperty(event)) {
      for(_namespace in this.listeners[event]) {
        if(this.listeners[event].hasOwnProperty(_namespace)) {
          _fnList = this.listeners[event][_namespace];
          for(var i = 0, len = _fnList.length; i < len; ++i) {
            _fnList[i].call(this, event, args, item);
          }
        }
      }
    }
  }
};