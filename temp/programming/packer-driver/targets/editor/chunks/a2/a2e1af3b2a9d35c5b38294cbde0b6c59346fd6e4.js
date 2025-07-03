System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, InputComponent, _crd;

  _export("InputComponent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08ddekdFXJA4YODULeKsOVC", "InputComponent", undefined);

      __checkObsolete__(['Vec2']);

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
//# sourceMappingURL=a2e1af3b2a9d35c5b38294cbde0b6c59346fd6e4.js.map