System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewComponent, _crd;

  function _reportPossibleCrUseOfPrefabKey(extras) {
    _reporterNs.report("PrefabKey", "../../data/types", _context.meta, extras);
  }

  _export("ViewComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee641cAdUdDiaYTPx1gycYC", "ViewComponent", undefined);

      //import { Node } from "cc";
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
//# sourceMappingURL=94f5aab1c500d003f5a94431c424fd1b517e15bf.js.map