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
        constructor(em, prefabs, gameRoot, tilesLayer, entityLayer, playerLayer, tileSize = 64, stepDuration = 0.15) {
          this.em = em;
          this.prefabs = prefabs;
          this.gameRoot = gameRoot;
          this.tilesLayer = tilesLayer;
          this.entityLayer = entityLayer;
          this.playerLayer = playerLayer;
          this.tileSize = tileSize;
          this.stepDuration = stepDuration;
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
          const entities = this.em.getEntityWithComponent(_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);

          for (const id of entities) {
            const prefabName = this.getPrefabName(id);
            if (!prefabName) continue;
            const position = this.em.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            if (!position) continue;
            let view = this.em.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
              error: Error()
            }), ViewComponent) : ViewComponent);

            if (!view) {
              console.log(prefabName);
              view = new (_crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent)(prefabName);
              this.em.addComponent(id, view, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
                error: Error()
              }), ViewComponent) : ViewComponent);
              const prefab = this.prefabs[prefabName];
              const node = instantiate(prefab);
              node.setPosition(new Vec3(position.x * this.tileSize, position.y * this.tileSize, 0));
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
              }), PrefabNames) : PrefabNames).Player) this.playerLayer.addChild(node);else if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Tile) this.tilesLayer.addChild(node);else if (prefabName === (_crd && PrefabNames === void 0 ? (_reportPossibleCrUseOfPrefabNames({
                error: Error()
              }), PrefabNames) : PrefabNames).Enemy) this.entityLayer.addChild(node);
              view.node = node;
            }
          }
        }
        /*private onMovePath(payload: { entity: number; path: Position[] }) {
            const { entity, path } = payload;
            const viewComp = this.em.getComponent(entity, ViewComponent);
            if (!viewComp?.node) return;
             const node = viewComp.node;
            const z = node.getPosition().z;
             // Начинаем chain tween-а
            let seq = tween(node);
             path.forEach((step, idx) => {
                const targetPos = new Vec3(
                    step.x * this.tileSize,
                    step.y * this.tileSize,
                    z
                );
                 seq = seq
                    .to(this.stepDuration, { position: targetPos })
                    .call(() => {
                        // На каждом шаге сразу обновляем ECS-Position
                        const pos = this.em.getComponent(entity, Position);
                        if (pos) {
                            pos.x = step.x;
                            pos.y = step.y;
                        }
                        // Если последний шаг — сообщаем о завершении
                        if (idx === path.length - 1) {
                            eventBus.emit("moveComplete", { entity });
                        }
                    });
            });
             seq.start();
        }*/

        /*private onMovePath({ entity, path }: { entity: number; path: Position[] }) {
            const view = this.em.getComponent(entity, ViewComponent);
            if (!view?.node) return;
             const node = view.node;
            const z = node.getPosition().z;
             // рекурсивная функция для по-шаговой анимации
            const animateStep = (idx: number) => {
                if (idx >= path.length) {
                    // закончили путь без попадания в ловушку
                    eventBus.emit('moveComplete', { entity });
                    return;
                }
                const step = path[idx];
                const target = new Vec3(
                    step.x * this.tileSize,
                    step.y * this.tileSize,
                    z
                );
                 tween(node)
                    .to(this.stepDuration, { position: target })
                    .call(() => {
                        // 1) Синхронизируем ECS-Position
                        const pos = this.em.getComponent(entity, Position)!;
                        pos.x = step.x;
                        pos.y = step.y;
                         // 2) Проверяем ловушки на этой клетке
                        const trapIds = this.em.getEntityWithComponent(Trap)
                            .filter(tid => {
                                const p = this.em.getComponent(tid, Position)!;
                                return p.x === step.x && p.y === step.y;
                            });
                        if (trapIds.length > 0) {
                            // берём первую ловушку, останавливаем движение
                            const trapId = trapIds[0];
                            eventBus.emit('trapTriggered', { entity, trap: trapId });
                            return;
                        }
                         // 3) Идём к следующему шагу
                        animateStep(idx + 1);
                    })
                    .start();
            };
             // стартуем с первого шага
            animateStep(0);
        }*/


        onMovePath({
          entity,
          path
        }) {
          const view = this.em.getComponent(entity, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
            error: Error()
          }), ViewComponent) : ViewComponent);
          if (!(view != null && view.node) || path.length === 0) return;
          const node = view.node;
          const z = node.getPosition().z;

          const animateStep = idx => {
            if (idx >= path.length) {
              // 1) Закончили движение
              (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
                error: Error()
              }), eventBus) : eventBus).emit('moveComplete', {
                entity
              }); // 2) Проверяем, есть ли враг на той же клетке

              const pos = this.em.getComponent(entity, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position);
              const enemies = this.em.getEntityWithComponent(_crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
                error: Error()
              }), EnemyTag) : EnemyTag).filter(eid => {
                const p = this.em.getComponent(eid, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                  error: Error()
                }), Position) : Position);
                return p.x === pos.x && p.y === pos.y;
              });

              if (enemies.length > 0) {
                // Первый враг — цель атаки
                (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
                  error: Error()
                }), eventBus) : eventBus).emit('attackStart', {
                  attacker: entity,
                  target: enemies[0]
                });
              }

              return;
            }

            const step = path[idx];
            const target = new Vec3(step.x * this.tileSize, step.y * this.tileSize, z);
            tween(node).to(this.stepDuration, {
              position: target
            }).call(() => {
              // а) Синхронизируем логику
              const pos = this.em.getComponent(entity, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position);
              pos.x = step.x;
              pos.y = step.y; // б) Проверяем ловушки

              const trapIds = this.em.getEntityWithComponent(TrapComponent).filter(tid => {
                const p = this.em.getComponent(tid, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                  error: Error()
                }), Position) : Position);
                return p.x === step.x && p.y === step.y;
              });

              if (trapIds.length > 0) {
                (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
                  error: Error()
                }), eventBus) : eventBus).emit('trapTriggered', {
                  entity,
                  trap: trapIds[0]
                });
                return;
              } // в) Идём к следующему шагу


              animateStep(idx + 1);
            }).start();
          };

          animateStep(0);
        }

        update(dt) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03f0778d00a77ed9c0a38ebd4a5ead85d7484fa5.js.map