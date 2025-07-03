System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Vec3, Node, UITransform, PlayerTag, PrefabNames, EnemyTag, TileTag, Position, ViewComponent, SceneController, RenderSystem, _crd;

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerTag(extras) {
    _reporterNs.report("PlayerTag", "../components/Tag/PlayerTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabNames(extras) {
    _reporterNs.report("PrefabNames", "../data/consts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyTag(extras) {
    _reporterNs.report("EnemyTag", "../components/Tag/EnemyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileTag(extras) {
    _reporterNs.report("TileTag", "../components/Tag/TileTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewComponent(extras) {
    _reporterNs.report("ViewComponent", "../components/core/ViewComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneController(extras) {
    _reporterNs.report("SceneController", "../core/SceneController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabType(extras) {
    _reporterNs.report("PrefabType", "../data/types", _context.meta, extras);
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
      Node = _cc.Node;
      UITransform = _cc.UITransform;
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
    }, function (_unresolved_8) {
      SceneController = _unresolved_8.SceneController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c099csmYaBAsprB78QGZWu/", "RenderSystem", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Vec3', 'Node', 'UITransform']);

      _export("RenderSystem", RenderSystem = class RenderSystem {
        constructor(entityManager, prefabs, gameRoot, tileSize) {
          this.entityManager = entityManager;
          this.prefabs = prefabs;
          this.gameRoot = gameRoot;
          this.tileSize = tileSize;
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
          var _this = this;

          var entities = this.entityManager.getEntityWithComponent(_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);

          var _loop = function _loop() {
            var prefabName = _this.getPrefabName(id);

            if (!prefabName) return "continue";

            var position = _this.entityManager.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);

            if (!position) return "continue";

            var view = _this.entityManager.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
              error: Error()
            }), ViewComponent) : ViewComponent);

            if (!view) {
              console.log(prefabName);
              view = new (_crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent)(prefabName);

              _this.entityManager.addComponent(id, view, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent);

              var prefab = _this.prefabs[prefabName];
              var node = instantiate(prefab);
              node.setPosition(new Vec3(position.x * _this.tileSize, position.y * _this.tileSize, 0));
              if (prefabName === 'Tile') node.getComponent(UITransform).priority = 0;else if (prefabName === 'Enemy') node.getComponent(UITransform).priority = 1;else if (prefabName === 'Player') node.getComponent(UITransform).priority = 2;
              if (prefabName === 'Tile') node.on(Node.EventType.TOUCH_END, () => {
                var _instance;

                (_instance = (_crd && SceneController === void 0 ? (_reportPossibleCrUseOfSceneController({
                  error: Error()
                }), SceneController) : SceneController).instance) == null ? void 0 : _instance.onTileTapped(position);
              });

              _this.gameRoot.addChild(node);

              view.node = node; //console.log('add ' + prefabName + position.x + position.y)
              //console.log("Added node", node.name, "at", node.getPosition());
              //console.log(node.isValid, node.activeInHierarchy, node.getWorldPosition());
            }
          };

          for (var id of entities) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        }

        update(dt) {
          var entities = this.entityManager.getEntityWithComponent(_crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
            error: Error()
          }), ViewComponent) : ViewComponent);

          for (var id of entities) {
            var view = this.entityManager.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
              error: Error()
            }), ViewComponent) : ViewComponent);
            var pos = this.entityManager.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);

            if (view != null && view.node && pos) {
              view.node.setPosition(new Vec3(pos.x * this.tileSize, pos.y * this.tileSize, view.node.getPosition().z));
            }
          }
        }
        /*function inputFromVec2(entity: number, type: string, vec: Vec2) {
            return new InputComponent(entity, type as any, vec.x, vec.y);
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62c09f4fdae67d11702efc18f17e36d175a9adc1.js.map