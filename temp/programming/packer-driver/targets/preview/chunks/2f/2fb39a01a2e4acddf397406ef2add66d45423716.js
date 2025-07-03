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

        onAttackStart(_ref) {
          var {
            attacker,
            target
          } = _ref;
          console.log("[CombatSystem] " + attacker + " \u0430\u0442\u0430\u043A\u0443\u0435\u0442 " + target); // тут можно сразу уменьшить здоровье:

          var hp = this.em.getComponent(target, _crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
            error: Error()
          }), Health) : Health);

          if (hp) {
            hp.health -= 1; // условно урон = 1

            console.log("[CombatSystem] \u0443 " + target + " \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C HP=" + hp.health);

            if (hp.health <= 0) {
              this.destroyEntity(target);
            }
          } // и кидаем сигнал о завершении боя, когда понадобится:
          // eventBus.emit('attackComplete', { attacker, target });

        }

        destroyEntity(id) {
          // удаляем ноду и все компоненты
          this.em.removeEntity(id);
          console.log("[CombatSystem] \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044C " + id + " \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0430");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2fb39a01a2e4acddf397406ef2add66d45423716.js.map