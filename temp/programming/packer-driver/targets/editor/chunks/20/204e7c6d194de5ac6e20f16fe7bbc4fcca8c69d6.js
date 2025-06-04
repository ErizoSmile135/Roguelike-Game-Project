System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RenderSystem, _crd;

  function _reportPossibleCrUseOfPrefabKey(extras) {
    _reporterNs.report("PrefabKey", "../../data/types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  _export("RenderSystem", void 0);

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

      _cclegacy._RF.push({}, "c099csmYaBAsprB78QGZWu/", "RenderSystem", undefined);

      __checkObsolete__(['Prefab']);

      _export("RenderSystem", RenderSystem = class RenderSystem {
        constructor(gameRoot, entityManager, prefabs) {
          this.gameRoot = gameRoot;
          this.entityManager = entityManager;
          this.prefabs = prefabs;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=204e7c6d194de5ac6e20f16fe7bbc4fcca8c69d6.js.map