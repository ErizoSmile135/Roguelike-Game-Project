System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InputComponent, MoveIntent, InputSystem, _crd;

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputComponent(extras) {
    _reporterNs.report("InputComponent", "../components/core/InputComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveIntent(extras) {
    _reporterNs.report("MoveIntent", "../components/intent/MoveIntent", _context.meta, extras);
  }

  _export("InputSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      InputComponent = _unresolved_2.InputComponent;
    }, function (_unresolved_3) {
      MoveIntent = _unresolved_3.MoveIntent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd95e2iJqdJZq7oDNTPWqx5", "InputSystem", undefined);

      _export("InputSystem", InputSystem = class InputSystem {
        constructor(entityManager, playerId) {
          this.entityManager = entityManager;
          this.playerId = playerId;
        }

        update(dt) {
          for (const eid of this.entityManager.getEntityWithComponent(_crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
            error: Error()
          }), InputComponent) : InputComponent)) {
            const {
              entity,
              target
            } = this.entityManager.getComponent(eid, _crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
              error: Error()
            }), InputComponent) : InputComponent);
            this.entityManager.addComponent(entity, new (_crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent)(target), _crd && MoveIntent === void 0 ? (_reportPossibleCrUseOfMoveIntent({
              error: Error()
            }), MoveIntent) : MoveIntent);
            this.entityManager.removeEntity(eid);
          }
          /*const inputEntities = this.entityManager.getEntityWithComponent(InputComponent);
            for (const inputEntityId of inputEntities) {
            const input = this.entityManager.getComponent(inputEntityId, InputComponent)!;
            const actorId = input.entity;
            const target = input.target;
              switch (input.type) {
              case InputNames.Move:
                this.entityManager.addComponent(
                  actorId,
                  new MoveIntent(target),
                  MoveIntent
                );
                break;
                case InputNames.Attack:
                this.entityManager.addComponent(
                  actorId,
                  new AttackIntent(target),
                  AttackIntent
                );
                break;
                case InputNames.Interact:
                this.entityManager.addComponent(
                  actorId,
                  new InteractIntent(target),
                  InteractIntent
                );
                break;
                case InputNames.Wait:
                this.entityManager.addComponent(
                  actorId,
                  new WaitIntent(),
                  WaitIntent
                );
                break;
            }
              this.entityManager.removeEntity(inputEntityId);
          }*/

        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85a6c1c52df433a6ca01a75b685e4b8459e96599.js.map