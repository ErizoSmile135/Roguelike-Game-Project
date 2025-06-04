System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewComponent, _crd;

  function _reportPossibleCrUseOfPrefabKey(extras) {
    _reporterNs.report("PrefabKey", "../data/types", _context.meta, extras);
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
        constructor(prefabName, node) {
          if (node === void 0) {
            node = null;
          }

          this.prefabName = prefabName;
          this.node = node;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72c205d9388530d177c2ffb5fd589b3ae92cf621.js.map