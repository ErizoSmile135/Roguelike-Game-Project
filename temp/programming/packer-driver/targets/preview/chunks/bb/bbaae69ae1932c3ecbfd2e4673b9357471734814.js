System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Vec3, Node, tween, PlayerTag, PrefabNames, EnemyTag, TileTag, Position, ViewComponent, SceneController, eventBus, RenderSystem, _crd;

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

  function _reportPossibleCrUseOfeventBus(extras) {
    _reporterNs.report("eventBus", "../core/EventBus", _context.meta, extras);
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
      tween = _cc.tween;
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
    }, function (_unresolved_9) {
      eventBus = _unresolved_9.eventBus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c099csmYaBAsprB78QGZWu/", "RenderSystem", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Vec3', 'Node', 'UITransform', 'tween']);

      _export("RenderSystem", RenderSystem = class RenderSystem {
        constructor(em, prefabs, gameRoot, tilesLayer, entityLayer, playerLayer, tileSize, stepDuration) {
          if (tileSize === void 0) {
            tileSize = 64;
          }

          if (stepDuration === void 0) {
            stepDuration = 0.15;
          }

          this.em = em;
          this.prefabs = prefabs;
          this.gameRoot = gameRoot;
          this.tilesLayer = tilesLayer;
          this.entityLayer = entityLayer;
          this.playerLayer = playerLayer;
          this.tileSize = tileSize;
          this.stepDuration = stepDuration;

          /*eventBus.on("positionChanged", ({ entity, newPos }) => {
              const view = this.entityManager.getComponent(entity, ViewComponent);
              if (view?.node) {
                  view.node.setPosition(
                      new Vec3(newPos.x * this.tileSize, newPos.y * this.tileSize, 0)
                  );
              }
              const pos = this.entityManager.getComponent(entity, Position);
              if (pos) {
                  pos.x = newPos.x;
                  pos.y = newPos.y;
              }
          });*/
          (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
            error: Error()
          }), eventBus) : eventBus).on('movePath', this.onMovePath.bind(this));
        }

        getPrefabName(entityId) {
          if (this.em.hasComponent(entityId, _crd && PlayerTag === void 0 ? (_reportPossibleCrUseOfPlayerTag({
            error: Error()
          }), PlayerTag) : PlayerTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Player;
          if (this.em.hasComponent(entityId, _crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
            error: Error()
          }), EnemyTag) : EnemyTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Enemy;
          if (this.em.hasComponent(entityId, _crd && TileTag === void 0 ? (_reportPossibleCrUseOfTileTag({
            error: Error()
          }), TileTag) : TileTag)) return (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
            error: Error()
          }), PrefabNames) : PrefabNames).Tile;
          return null;
        }

        render() {
          var _this = this;

          var entities = this.em.getEntityWithComponent(_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);

          var _loop = function _loop() {
            var prefabName = _this.getPrefabName(id);

            if (!prefabName) return "continue";

            var position = _this.em.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);

            if (!position) return "continue";

            var view = _this.em.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
              error: Error()
            }), ViewComponent) : ViewComponent);

            if (!view) {
              console.log(prefabName);
              view = new (_crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent)(prefabName);

              _this.em.addComponent(id, view, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent);

              var prefab = _this.prefabs[prefabName];
              var node = instantiate(prefab);
              node.setPosition(new Vec3(position.x * _this.tileSize, position.y * _this.tileSize, 0));
              /*if (prefabName === 'Tile') node.getComponent(UITransform).priority = 0;
              else if (prefabName === 'Enemy') node.getComponent(UITransform).priority = 1;
              else if (prefabName === 'Player') node.getComponent(UITransform).priority = 2;*/
              //node.setSiblingIndex(this.gameRoot.children.length - 1);

              /*switch (prefabName) {
                  case PrefabNames.Tile:
                      node.setSiblingIndex(0);
                      break;
                  case PrefabNames.Enemy:
                      node.setSiblingIndex(1);
                      break;
                  case PrefabNames.Player:
                      node.setSiblingIndex(entities.length - 1);
                      break;
              }*/

              if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Tile) node.on(Node.EventType.TOUCH_END, () => {
                var _instance;

                (_instance = (_crd && SceneController === void 0 ? (_reportPossibleCrUseOfSceneController({
                  error: Error()
                }), SceneController) : SceneController)._instance) == null ? void 0 : _instance.onTileTapped(position);
              });
              if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Player) _this.playerLayer.addChild(node);else if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Tile) _this.tilesLayer.addChild(node);else if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Enemy) _this.entityLayer.addChild(node);
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
          /*const entities = this.entityManager.getEntityWithComponent(ViewComponent);
          for (const id of entities) {
              const view = this.entityManager.getComponent(id, ViewComponent);
              const pos  = this.entityManager.getComponent(id, Position);
              if (view?.node && pos) {
                  view.node.setPosition(
                      new Vec3(pos.x * this.tileSize, pos.y * this.tileSize, view.node.getPosition().z)
                  );
              }
          }*/
        }
        /*function inputFromVec2(entity: number, type: string, vec: Vec2) {
            return new InputComponent(entity, type as any, vec.x, vec.y);
        }*/

        /**
        * Обработчик события, когда рассчитан путь.
        * @param payload.entity — ID сущности, которой нужно двигать
        * @param payload.path   — массив логических позиций по порядку
        */


        onMovePath(payload) {
          /***/
          console.log('[RenderSystem] onMovePath', payload);
          var {
            entity,
            path
          } = payload;
          var viewComp = this.em.getComponent(entity, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
            error: Error()
          }), ViewComponent) : ViewComponent); //const pos = this.em.getComponent(entity, Position);
          // Если визуала нет или путь пуст — ничего не делаем

          if (!(viewComp != null && viewComp.node) || path.length === 0) {
            return;
          }

          var node = viewComp.node; // Сохраняем Z, чтобы не уронить глубину слоя

          var z = node.getPosition().z; // Начинаем сборку цепочки анимаций

          var seq = tween(node);

          for (var step of path) {
            // Вычисляем цель в мировых пикселях
            var targetPos = new Vec3(step.x * this.tileSize, step.y * this.tileSize, z); //pos.x = step.x;
            //pos.y = step.y;
            // Добавляем в цепочку tween, который за stepDuration секунд
            // переместит node.position → targetPos

            seq = seq.to(this.stepDuration, {
              position: targetPos
            });
          } // После того как пройдём весь путь — можем вызвать коллбэк

          /*seq.call(() => {
              // Здесь можно, например, emit('moveComplete', ...) или сразу запускать бой
              eventBus.emit('moveComplete', { entity });
          });*/
          // Запускаем всю собранную последовательность


          seq.start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbaae69ae1932c3ecbfd2e4673b9357471734814.js.map