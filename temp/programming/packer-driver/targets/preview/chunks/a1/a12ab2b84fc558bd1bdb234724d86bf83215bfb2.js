System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AttackIntent, MoveIntent, Position, EnemyTag, eventBus, findPathInTemplate, MovementSystem, _crd;

  function _reportPossibleCrUseOfAttackIntent(extras) {
    _reporterNs.report("AttackIntent", "../components/intent/AttackIntent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveIntent(extras) {
    _reporterNs.report("MoveIntent", "../components/intent/MoveIntent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyTag(extras) {
    _reporterNs.report("EnemyTag", "../components/Tag/EnemyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventBus(extras) {
    _reporterNs.report("eventBus", "../core/EventBus", _context.meta, extras);
  }

  function _reportPossibleCrUseOffindPathInTemplate(extras) {
    _reporterNs.report("findPathInTemplate", "../core/Pathfinding", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../data/types", _context.meta, extras);
  }

  _export("MovementSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AttackIntent = _unresolved_2.AttackIntent;
    }, function (_unresolved_3) {
      MoveIntent = _unresolved_3.MoveIntent;
    }, function (_unresolved_4) {
      Position = _unresolved_4.Position;
    }, function (_unresolved_5) {
      EnemyTag = _unresolved_5.EnemyTag;
    }, function (_unresolved_6) {
      eventBus = _unresolved_6.eventBus;
    }, function (_unresolved_7) {
      findPathInTemplate = _unresolved_7.findPathInTemplate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b9bf/xkAZPGpMN+rhVggWk", "MovementSystem", undefined);

      _export("MovementSystem", MovementSystem = class MovementSystem {
        constructor(em, currentRoom) {
          this.RoomNumber = 0;
          this.dirs = [{
            x: 1,
            y: 0
          }, {
            x: -1,
            y: 0
          }, {
            x: 0,
            y: 1
          }, {
            x: 0,
            y: -1
          }];
          this.em = em;
          this.currentRoom = currentRoom;
        }

        update(dt) {
          //console.log('[MovementSystem] update, dt=', dt);
          var movers = this.em.getEntityWithComponent(_crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
            error: Error()
          }), MoveIntent) : MoveIntent);

          for (var actorId of movers) {
            var mi = this.em.getComponent(actorId, _crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent);
            var {
              x,
              y
            } = mi.target;
            var pos = this.em.getComponent(actorId, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            console.log("[MovementSystem] actor=" + actorId + " start=(" + pos.x + "," + pos.y + ") goal=(" + mi.target.x + "," + mi.target.y + ")"); //pos.x = x;
            //pos.y = y;

            var path = (_crd && findPathInTemplate === void 0 ? (_reportPossibleCrUseOffindPathInTemplate({
              error: Error()
            }), findPathInTemplate) : findPathInTemplate)(this.currentRoom[this.RoomNumber], pos, mi.target);
            /**/

            console.log('[MovementSystem] path for', actorId, '=', path);
            /**/

            console.log('[MovementSystem] processing MoveIntent for', actorId, 'goal=', mi.target);
            this.em.removeComponent(actorId, _crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent);

            if (path && path.length) {
              /***/
              console.log('[MovementSystem] emit movePath for', actorId);
              (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
                error: Error()
              }), eventBus) : eventBus).emit("movePath", {
                entity: actorId,
                path
              });
            }

            var occupants = this.findEntitiesAtPosition(x, y); // если есть враг — планируем атаку

            var enemy = occupants.find(id => this.em.hasComponent(id, _crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
              error: Error()
            }), EnemyTag) : EnemyTag));

            if (enemy != null) {
              this.em.addComponent(actorId, new (_crd && AttackIntent === void 0 ? (_reportPossibleCrUseOfAttackIntent({
                error: Error()
              }), AttackIntent) : AttackIntent)(enemy), _crd && AttackIntent === void 0 ? (_reportPossibleCrUseOfAttackIntent({
                error: Error()
              }), AttackIntent) : AttackIntent);
              continue;
            } // если есть ловушка

            /*const trap = occupants.find(id => this.entityManager.hasComponent(id, TrapComponent));
            if (trap != null) {
                this.entityManager.addComponent(actor, new TrapIntent(trap), TrapIntent);
                continue;
            }*/
            // …другие проверки: двери → TransitionIntent и т.п.

          }
        }

        findEntitiesAtPosition(x, y) {
          var result = [];

          for (var id of this.em.getEntityWithComponent(_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position)) {
            var p = this.em.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            if (p.x === x && p.y === y) result.push(id);
          }

          return result;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a12ab2b84fc558bd1bdb234724d86bf83215bfb2.js.map