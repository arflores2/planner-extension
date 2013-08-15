var ContextMenu = function(config) {
  config = config || {};

  var me = this;

  function _draw() {
    chrome.contextMenus.create({
      "id": "selection",
      "title": "Plan it!!",
      "contexts":["selection"]
    });
  }

  _draw();
  return $.extend(this, {
    draw: _draw
  }, chrome.contextMenus);
}
