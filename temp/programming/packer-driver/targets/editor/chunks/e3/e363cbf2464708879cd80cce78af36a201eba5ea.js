System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InputComponent, InputSystem, _crd;

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputComponent(extras) {
    _reporterNs.report("InputComponent", "../components/InputComponent", _context.meta, extras);
  }

  _export("InputSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      InputComponent = _unresolved_2.InputComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd95e2iJqdJZq7oDNTPWqx5", "InputSystem", undefined);

      _export("InputSystem", InputSystem = class InputSystem {
        constructor(entityManager, playerId) {
          this.entityManager = entityManager;
          this.playerId = playerId;
        }

        handleInput(input) {
          this.entityManager.addComponent(input.entity, input, _crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
            error: Error()
          }), InputComponent) : InputComponent);
          console.log(`[InputSystem] Input registered:`, input);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e363cbf2464708879cd80cce78af36a201eba5ea.js.map