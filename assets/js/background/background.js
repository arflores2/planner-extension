(function() {

  var _contextMenu = new ContextMenu();
  var _browserAction = new BrowserAction();
  var _plansStore = new PlansStore();
  
  var _backgroundController = new BackgroundController({
    view: {
      ContextMenu: _contextMenu,
      BrowserAction: _browserAction
    },
    store: {
      Plans: _plansStore
    }
  });

  function _init() {
    MP.controller.Background.route();
  }

  window.MP = {
    controller: {
      Background: _backgroundController
    },
    store: {
      Plans: _plansStore
    },
    view: {
      ContextMenu: _contextMenu
    }
  };

  _init();
})()