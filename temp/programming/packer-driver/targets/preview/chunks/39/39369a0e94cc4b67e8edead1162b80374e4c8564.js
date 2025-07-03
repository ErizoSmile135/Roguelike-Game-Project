System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PrefabNames, InputNames;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e481b1UR9FmKWddOitjlKt", "consts", undefined);

      _export("PrefabNames", PrefabNames = {
        Player: 'Player',
        Enemy: 'Enemy',
        Tile: 'Tile'
      });

      _export("InputNames", InputNames = {
        Move: 'move',
        Attack: 'attack',
        Interact: 'interact',
        Wait: 'wait'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39369a0e94cc4b67e8edead1162b80374e4c8564.js.map