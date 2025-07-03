System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InputComponent, EnemyTag, Position, InputSystem, _crd;

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputComponent(extras) {
    _reporterNs.report("InputComponent", "../components/InputComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyTag(extras) {
    _reporterNs.report("EnemyTag", "../components/EnemyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
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
      EnemyTag = _unresolved_3.EnemyTag;
    }, function (_unresolved_4) {
      Position = _unresolved_4.Position;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd95e2iJqdJZq7oDNTPWqx5", "InputSystem", undefined);

      _export("InputSystem", InputSystem = class InputSystem {
        constructor(entityManager, playerId) {
          this.entityManager = entityManager;
          this.playerId = playerId;
        }
        /*handleInput(input: InputComponent) {
            this.entityManager.addComponent(input.entity, input, InputComponent);
            console.log(`[InputSystem] Input registered:`, input);
        }*/


        update(dt) {
          const inputs = this.entityManager.getEntityWithComponent(_crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
            error: Error()
          }), InputComponent) : InputComponent);

          for (const entityId of inputs) {
            const input = this.entityManager.getComponent(entityId, _crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
              error: Error()
            }), InputComponent) : InputComponent);
            const pos = input.target; // Проверка: есть ли враг на позиции

            const enemyIds = this.entityManager.getEntityWithComponent(_crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
              error: Error()
            }), EnemyTag) : EnemyTag);
            const enemyAtTarget = enemyIds.find(id => {
              const p = this.entityManager.getComponent(id, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position);
              return (p == null ? void 0 : p.x) === pos.x && (p == null ? void 0 : p.y) === pos.y;
            });

            if (enemyAtTarget) {
              // Добавим движение вплотную
              const playerPos = this.entityManager.getComponent(entityId, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position);
              const moveTarget = this.getAdjacentTo(enemyAtTarget, playerPos);

              if (moveTarget) {
                this.entityManager.addComponent(entityId, new MoveIntent(moveTarget), MoveIntent);
                this.entityManager.addComponent(entityId, new AttackIntent(enemyAtTarget), AttackIntent);
              }
            } else {
              // Просто двигаемся
              this.entityManager.addComponent(entityId, new MoveIntent(pos), MoveIntent);
            } // Удаляем input после обработки


            this.entityManager.removeComponent(entityId, _crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
              error: Error()
            }), InputComponent) : InputComponent);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=026f135a329de0627d95b4681233539af442894d.js.map