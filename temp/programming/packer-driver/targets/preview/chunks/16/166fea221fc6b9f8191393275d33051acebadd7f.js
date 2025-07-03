System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MoveIntent, _crd;

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../Position", _context.meta, extras);
  }

  _export("MoveIntent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1155jwnCZNO4bZR8DFPIEu", "MoveIntent", undefined);

      _export("MoveIntent", MoveIntent = class MoveIntent {
        //public path: Position[] | null = null; 
        constructor(target) {
          this.target = target;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=166fea221fc6b9f8191393275d33051acebadd7f.js.map