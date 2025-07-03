System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, eventBus, Position, Trap, TrapSystem, _crd;

  function _reportPossibleCrUseOfeventBus(extras) {
    _reporterNs.report("eventBus", "../core/EventBus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrap(extras) {
    _reporterNs.report("Trap", "../components/Trap", _context.meta, extras);
  }

  _export("TrapSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      eventBus = _unresolved_2.eventBus;
    }, function (_unresolved_3) {
      Position = _unresolved_3.Position;
    }, function (_unresolved_4) {
      Trap = _unresolved_4.Trap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be4a4IGZTdHgInlOHhoTQBF", "TrapSystem", undefined);

      _export("TrapSystem", TrapSystem = class TrapSystem {
        constructor(em) {
          this.em = em;
          // подписываемся на окончание движения
          (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
            error: Error()
          }), eventBus) : eventBus).on('moveComplete', this.onMoveComplete.bind(this));
        }

        onMoveComplete(payload) {
          var actor = payload.entity; // получаем позицию, куда встал актор

          var pos = this.em.getComponent(actor, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);
          if (!pos) return; // ищем все сущности-ловушки на этой клеткеs

          var traps = this.em.getEntityWithComponent(_crd && Trap === void 0 ? (_reportPossibleCrUseOfTrap({
            error: Error()
          }), Trap) : Trap).filter(trapId => {
            var trapPos = this.em.getComponent(trapId, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
              error: Error()
            }), Position) : Position);
            return (trapPos == null ? void 0 : trapPos.x) === pos.x && (trapPos == null ? void 0 : trapPos.y) === pos.y;
          }); // для каждой найденной ловушки эмитим событие

          for (var trapId of traps) {
            var trap = this.em.getComponent(trapId, _crd && Trap === void 0 ? (_reportPossibleCrUseOfTrap({
              error: Error()
            }), Trap) : Trap);
            console.log("[TrapSystem] entity " + actor + " triggered trap " + trapId + " for " + trap.damage + " dmg");
            (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
              error: Error()
            }), eventBus) : eventBus).emit('trapTriggered', {
              entity: actor,
              trap: trapId,
              damage: trap.damage
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79f6635349a14fcf4844c1de2abf8cd4df6eeb59.js.map