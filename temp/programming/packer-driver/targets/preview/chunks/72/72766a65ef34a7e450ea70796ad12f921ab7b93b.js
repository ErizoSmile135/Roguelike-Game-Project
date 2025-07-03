System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InputComponent, _crd;

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "./Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputType(extras) {
    _reporterNs.report("InputType", "../data/types", _context.meta, extras);
  }

  _export("InputComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08ddekdFXJA4YODULeKsOVC", "InputComponent", undefined);

      _export("InputComponent", InputComponent = class InputComponent {
        constructor(entity, type, target) {
          this.entity = entity;
          this.type = type;
          this.target = target;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72766a65ef34a7e450ea70796ad12f921ab7b93b.js.map