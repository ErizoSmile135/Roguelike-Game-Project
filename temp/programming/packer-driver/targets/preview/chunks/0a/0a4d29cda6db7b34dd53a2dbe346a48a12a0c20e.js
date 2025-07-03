System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, InputComponent, _crd;

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "./Position", _context.meta, extras);
  }

  _export("InputComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08ddekdFXJA4YODULeKsOVC", "InputComponent", undefined);

      __checkObsolete__(['Vec2']);

      _export("InputComponent", InputComponent = class InputComponent {
        constructor(entity, type, position) {
          this.entity = entity;
          this.type = type;
          this.position = position;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a4d29cda6db7b34dd53a2dbe346a48a12a0c20e.js.map