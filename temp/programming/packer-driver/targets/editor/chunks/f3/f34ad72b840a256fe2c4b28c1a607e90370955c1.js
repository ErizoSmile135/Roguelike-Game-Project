System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, eventBus, Damage, TrapSystem, _crd;

  function _reportPossibleCrUseOfeventBus(extras) {
    _reporterNs.report("eventBus", "../core/EventBus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamage(extras) {
    _reporterNs.report("Damage", "../components/Damage", _context.meta, extras);
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
      Damage = _unresolved_3.Damage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be4a4IGZTdHgInlOHhoTQBF", "TrapSystem", undefined);

      _export("TrapSystem", TrapSystem = class TrapSystem {
        constructor(em) {
          this.em = em;
          (_crd && eventBus === void 0 ? (_reportPossibleCrUseOfeventBus({
            error: Error()
          }), eventBus) : eventBus).on('trapTriggered', this.onTrapTriggered.bind(this));
        }

        onTrapTriggered({
          entity,
          trap
        }) {
          const dmgComp = this.em.getComponent(trap, _crd && Damage === void 0 ? (_reportPossibleCrUseOfDamage({
            error: Error()
          }), Damage) : Damage);
          const damage = dmgComp ? dmgComp.damage : 1; // default 1

          console.log(`[TrapSystem] Entity ${entity} hit trap ${trap}, damage = ${damage}`); // тут можно эмитить событие о нанесённом уроне или сразу добавлять компонент:
          // const dmgEnt = this.em.createEntity();
          // this.em.addComponent(dmgEnt, new DamageIntent(entity, damage), DamageIntent);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f34ad72b840a256fe2c4b28c1a607e90370955c1.js.map