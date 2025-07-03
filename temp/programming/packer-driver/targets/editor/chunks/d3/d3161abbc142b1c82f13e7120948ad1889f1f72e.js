System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, eventBus, Health, CombatSystem, _crd;

  function _reportPossibleCrUseOfeventBus(extras) {
    _reporterNs.report("eventBus", "../core/EventBus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealth(extras) {
    _reporterNs.report("Health", "../components/Health", _context.meta, extras);
  }

  _export("CombatSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      eventBus = _unresolved_2.eventBus;
    }, function (_unresolved_3) {
      Health = _unresolved_3.Health;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf56fTfNXRB0oFQDV+Y4KqJ", "CombatSystem", undefined);

      _export("CombatSystem", CombatSystem = class CombatSystem {
        constructor(em) {
          this.em = em;
          (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
            error: Error()
          }), eventBus) : eventBus).on('attackStart', this.onAttackStart.bind(this));
        }

        onAttackStart({
          attacker,
          target
        }) {
          console.log(`[CombatSystem] ${attacker} атакует ${target}`); // тут можно сразу уменьшить здоровье:

          const hp = this.em.getComponent(target, _crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
            error: Error()
          }), Health) : Health);

          if (hp) {
            hp.health -= 1; // условно урон = 1

            console.log(`[CombatSystem] у ${target} осталось HP=${hp.health}`);

            if (hp.health <= 0) {
              this.destroyEntity(target);
            }
          } // и кидаем сигнал о завершении боя, когда понадобится:
          // eventBus.emit('attackComplete', { attacker, target });

        }

        destroyEntity(id) {
          // удаляем ноду и все компоненты
          this.em.removeEntity(id);
          console.log(`[CombatSystem] сущность ${id} уничтожена`);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3161abbc142b1c82f13e7120948ad1889f1f72e.js.map