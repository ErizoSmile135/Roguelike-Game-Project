System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Vec3, PlayerTag, PrefabNames, EnemyTag, TileTag, Position, ViewComponent, RenderSystem, _crd;

  function _reportPossibleCrUseOfPrefabKey(extras) {
    _reporterNs.report("PrefabKey", "../data/types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerTag(extras) {
    _reporterNs.report("PlayerTag", "../components/PlayerTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabNames(extras) {
    _reporterNs.report("PrefabNames", "../data/consts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyTag(extras) {
    _reporterNs.report("EnemyTag", "../components/EnemyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileTag(extras) {
    _reporterNs.report("TileTag", "../components/TileTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewComponent(extras) {
    _reporterNs.report("ViewComponent", "../components/ViewComponent", _context.meta, extras);
  }

  _export("RenderSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PlayerTag = _unresolved_2.PlayerTag;
    }, function (_unresolved_3) {
      PrefabNames = _unresolved_3.PrefabNames;
    }, function (_unresolved_4) {
      EnemyTag = _unresolved_4.EnemyTag;
    }, function (_unresolved_5) {
      TileTag = _unresolved_5.TileTag;
    }, function (_unresolved_6) {
      Position = _unresolved_6.Position;
    }, function (_unresolved_7) {
      ViewComponent = _unresolved_7.ViewComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c099csmYaBAsprB78QGZWu/", "RenderSystem", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Vec3', 'Node']);

      _export("RenderSystem", RenderSystem = class RenderSystem {
        constructor(entityManager, prefabs, gameRoot) {
          this.entityManager = entityManager;
          this.prefabs = prefabs;
          this.gameRoot = gameRoot;
        }

        getPrefabName(entityId) {
          if (this.entityManager.hasComponent(entityId, _crd && PlayerTag === void 0 ? (_reportPossibleCrUseOfPlayerTag({
            error: Error()
          }), PlayerTag) : PlayerTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Player;
          if (this.entityManager.hasComponent(entityId, _crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
            error: Error()
          }), EnemyTag) : EnemyTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Enemy;
          if (this.entityManager.hasComponent(entityId, _crd && TileTag === void 0 ? (_reportPossibleCrUseOfTileTag({
            error: Error()
          }), TileTag) : TileTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Tile;
          return null;
        }

        render() {
          const entities = this.entityManager.getEntityWithComponent(_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);

          for (const id of entities) {
            const prefabName = this.getPrefabName(id);
            if (!prefabName) continue;
            const position = this.entityManager.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            if (!position) continue;
            let view = this.entityManager.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
              error: Error()
            }), ViewComponent) : ViewComponent);

            if (!view) {
              if (prefabName == 'Tile') break;
              view = new (_crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent)(prefabName);
              this.entityManager.addComponent(id, view, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent);
              /*let z = 0;
              if (prefabName === 'Tile') node.getComponent(Transform)!.priority = 10; ;
              else if (prefabName === 'Enemy') z = 0;
              else if (prefabName === 'Player') z = 1;*/

              const prefab = this.prefabs[prefabName];
              const node = instantiate(prefab);
              node.setPosition(new Vec3(position.x * 64, position.y * 64, 0));
              this.gameRoot.addChild(node);
              view.node = node;
              console.log('add ' + prefabName + position.x + position.y); //console.log("Added node", node.name, "at", node.getPosition());
              //console.log(node.isValid, node.activeInHierarchy, node.getWorldPosition());
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=796a6f5c19bf446c735b2fed6511f92786ba8383.js.map