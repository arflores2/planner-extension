var BackgroundController = function(config) {
  config = config || {};

  var me = this;

  function _route() {

    /**
     * context menu click
     */
    me.view.ContextMenu.onClicked.addListener(function(message, tab) {
      var selectedText = message.selectionText;
      me.store.Plans.add(selectedText);
    });

    me.store.Plans.addListener('add', function() {
    });
  }

  return $.extend(this, {
    route: _route
  }, config)
}