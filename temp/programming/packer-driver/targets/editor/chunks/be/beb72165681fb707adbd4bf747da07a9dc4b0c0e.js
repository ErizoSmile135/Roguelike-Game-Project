System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PrefabNames, InputType;

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

      _export("InputType", InputType = {
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
//# sourceMappingURL=beb72165681fb707adbd4bf747da07a9dc4b0c0e.js.map