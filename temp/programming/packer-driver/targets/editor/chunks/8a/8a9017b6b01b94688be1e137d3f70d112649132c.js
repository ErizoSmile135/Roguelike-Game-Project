System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewComponent, _crd;

  function _reportPossibleCrUseOfPrefabType(extras) {
    _reporterNs.report("PrefabType", "../../data/types", _context.meta, extras);
  }

  _export("ViewComponent", void 0);

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

      _cclegacy._RF.push({}, "ee641cAdUdDiaYTPx1gycYC", "ViewComponent", undefined);

      __checkObsolete__(['Node']);

      _export("ViewComponent", ViewComponent = class ViewComponent {
        constructor(prefabName, node = null) {
          this.prefabName = prefabName;
          this.node = node;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a9017b6b01b94688be1e137d3f70d112649132c.js.map