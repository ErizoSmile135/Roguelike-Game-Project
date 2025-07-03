System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MoveIntent, Position, eventBus, findPathInTemplate, MovementSystem, _crd;

  function _reportPossibleCrUseOfMoveIntent(extras) {
    _reporterNs.report("MoveIntent", "../components/intent/MoveIntent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
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
      MoveIntent = _unresolved_2.MoveIntent;
    }, function (_unresolved_3) {
      Position = _unresolved_3.Position;
    }, function (_unresolved_4) {
      eventBus = _unresolved_4.eventBus;
    }, function (_unresolved_5) {
      findPathInTemplate = _unresolved_5.findPathInTemplate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b9bf/xkAZPGpMN+rhVggWk", "MovementSystem", undefined);

      _export("MovementSystem", MovementSystem = class MovementSystem {
        constructor(em, currentRoom) {
          this.RoomNumber = 0;
          this.em = em;
          this.currentRoom = currentRoom;
        }

        update(dt) {
          for (const actor of this.em.getEntityWithComponent(_crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
            error: Error()
          }), MoveIntent) : MoveIntent)) {
            const mi = this.em.getComponent(actor, _crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent);
            const start = this.em.getComponent(actor, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            const goal = mi.target; // 1) находим полный путь

            const path = (_crd && findPathInTemplate === void 0 ? (_reportPossibleCrUseOffindPathInTemplate({
              error: Error()
            }), findPathInTemplate) : findPathInTemplate)(this.currentRoom[this.RoomNumber], start, goal) || []; // 2) удаляем intent — дальше займётся RenderSystem

            this.em.removeComponent(actor, _crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent); // 3) эмитим даже пустой путь, чтобы всегда было событие

            (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
              error: Error()
            }), eventBus) : eventBus).emit("movePath", {
              entity: actor,
              path
            });
          } // если есть ловушка

          /*const trap = occupants.find(id => this.entityManager.hasComponent(id, TrapComponent));
          if (trap != null) {
              this.entityManager.addComponent(actor, new TrapIntent(trap), TrapIntent);
              continue;
          }*/
          // …другие проверки: двери → TransitionIntent и т.п.

        }
        /*private findEntitiesAtPosition(x: number, y: number): number[] {
            const result: number[] = [];
            for (const id of this.em.getEntityWithComponent(Position)) {
                const p = this.em.getComponent(id, Position)!;
                if (p.x === x && p.y === y) result.push(id);
            }
        return result;
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ca4a9d85fb6cef600731425ef7e1dff4c85b606.js.map