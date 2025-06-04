System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, loadRoomTemplates, RoomTemplates, GameManager, _crd, gameManager;

  function initializeGame(callback) {
    (_crd && loadRoomTemplates === void 0 ? (_reportPossibleCrUseOfloadRoomTemplates({
      error: Error()
    }), loadRoomTemplates) : loadRoomTemplates)(() => {
      gameManager.initializeRoomTemplate(_crd && RoomTemplates === void 0 ? (_reportPossibleCrUseOfRoomTemplates({
        error: Error()
      }), RoomTemplates) : RoomTemplates);
      callback();
    });
  }

  function _reportPossibleCrUseOfloadRoomTemplates(extras) {
    _reporterNs.report("loadRoomTemplates", "../config/RoomConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplates(extras) {
    _reporterNs.report("RoomTemplates", "../config/RoomConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  _export("initializeGame", initializeGame);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      loadRoomTemplates = _unresolved_2.loadRoomTemplates;
      RoomTemplates = _unresolved_2.RoomTemplates;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6e329mTvlEvJp/B9qzIAaq", "Game", undefined);

      _export("gameManager", gameManager = new (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager)());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fe484b8a11131ead580879370e790059308ce64.js.map