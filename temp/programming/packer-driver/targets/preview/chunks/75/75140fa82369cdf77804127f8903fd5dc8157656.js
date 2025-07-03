System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EntityManager, RenderSystem, RoomSystem, InputSystem, PlayerTag, Health, Damage, InputComponent, Position, InputNames, MovementSystem, TrapSystem, GameManager, _crd;

  function _reportPossibleCrUseOfPrefabType(extras) {
    _reporterNs.report("PrefabType", "../data/types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../data/types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "./EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderSystem(extras) {
    _reporterNs.report("RenderSystem", "../systems/RenderSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomSystem(extras) {
    _reporterNs.report("RoomSystem", "../systems/RoomSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputSystem(extras) {
    _reporterNs.report("InputSystem", "../systems/InputSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerTag(extras) {
    _reporterNs.report("PlayerTag", "../components/Tag/PlayerTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealth(extras) {
    _reporterNs.report("Health", "../components/Health", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamage(extras) {
    _reporterNs.report("Damage", "../components/Damage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputComponent(extras) {
    _reporterNs.report("InputComponent", "../components/core/InputComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputNames(extras) {
    _reporterNs.report("InputNames", "../data/consts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovementSystem(extras) {
    _reporterNs.report("MovementSystem", "../systems/MovementSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrapSystem(extras) {
    _reporterNs.report("TrapSystem", "../systems/TrapSystem", _context.meta, extras);
  }

  _export("GameManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      EntityManager = _unresolved_2.EntityManager;
    }, function (_unresolved_3) {
      RenderSystem = _unresolved_3.RenderSystem;
    }, function (_unresolved_4) {
      RoomSystem = _unresolved_4.RoomSystem;
    }, function (_unresolved_5) {
      InputSystem = _unresolved_5.InputSystem;
    }, function (_unresolved_6) {
      PlayerTag = _unresolved_6.PlayerTag;
    }, function (_unresolved_7) {
      Health = _unresolved_7.Health;
    }, function (_unresolved_8) {
      Damage = _unresolved_8.Damage;
    }, function (_unresolved_9) {
      InputComponent = _unresolved_9.InputComponent;
    }, function (_unresolved_10) {
      Position = _unresolved_10.Position;
    }, function (_unresolved_11) {
      InputNames = _unresolved_11.InputNames;
    }, function (_unresolved_12) {
      MovementSystem = _unresolved_12.MovementSystem;
    }, function (_unresolved_13) {
      TrapSystem = _unresolved_13.TrapSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c538f7EkzNKRYOz+iGqC2x7", "GameManager", undefined);

      __checkObsolete__(['Prefab', 'Node']);

      _export("GameManager", GameManager = class GameManager {
        constructor() {
          this.entityManager = void 0;
          this.prefabs = {};
          this.roomTemplate = [];
          this.gameRoot = null;
          this.tilesLayer = null;
          this.entityLayer = null;
          this.playerLayer = null;
          this.playerId = null;
          this.tileSize = 64;
          this.entityManager = new (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
            error: Error()
          }), EntityManager) : EntityManager)();
        }

        createPlayer() {
          var id = this.entityManager.createEntity();
          this.entityManager.addComponent(id, new (_crd && PlayerTag === void 0 ? (_reportPossibleCrUseOfPlayerTag({
            error: Error()
          }), PlayerTag) : PlayerTag)(), _crd && PlayerTag === void 0 ? (_reportPossibleCrUseOfPlayerTag({
            error: Error()
          }), PlayerTag) : PlayerTag);
          this.entityManager.addComponent(id, new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position)(0, 0), _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
            error: Error()
          }), Position) : Position);
          this.entityManager.addComponent(id, new (_crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
            error: Error()
          }), Health) : Health)(100), _crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
            error: Error()
          }), Health) : Health);
          this.entityManager.addComponent(id, new (_crd && Damage === void 0 ? (_reportPossibleCrUseOfDamage({
            error: Error()
          }), Damage) : Damage)(10), _crd && Damage === void 0 ? (_reportPossibleCrUseOfDamage({
            error: Error()
          }), Damage) : Damage);
          this.playerId = id;
        }
        /*  Паттерн синглтона через геттер (я использовал экспорт в Game)
        private static _instance: GameManager;
        static get instance(): GameManager {
          if (!this._instance) {
            this._instance = new GameManager();
          }
          return this._instance;
        }
        private constructor() {}*/


        initializeRoomTemplate(templates) {
          this.roomTemplate = templates;
        }

        initializeSystems() {
          this.renderSystem = new (_crd && RenderSystem === void 0 ? (_reportPossibleCrUseOfRenderSystem({
            error: Error()
          }), RenderSystem) : RenderSystem)(this.entityManager, this.prefabs, this.gameRoot, this.tilesLayer, this.entityLayer, this.playerLayer);
          this.roomSystem = new (_crd && RoomSystem === void 0 ? (_reportPossibleCrUseOfRoomSystem({
            error: Error()
          }), RoomSystem) : RoomSystem)(this.entityManager, this.roomTemplate, this.playerId);
          this.inputSystem = new (_crd && InputSystem === void 0 ? (_reportPossibleCrUseOfInputSystem({
            error: Error()
          }), InputSystem) : InputSystem)(this.entityManager, this.playerId);
          this.movementSystem = new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)(this.entityManager, this.roomTemplate);
          this.trapSystem = new (_crd && TrapSystem === void 0 ? (_reportPossibleCrUseOfTrapSystem({
            error: Error()
          }), TrapSystem) : TrapSystem)(this.entityManager);
        }

        setPrefabs(prefabs) {
          this.prefabs = prefabs;
        }

        getPrefab(name) {
          return this.prefabs[name] || null;
        }

        setGameRoot(gameRoot, tilesLayer, entityLayer, playerLayer) {
          this.gameRoot = gameRoot;
          this.tilesLayer = tilesLayer;
          this.entityLayer = entityLayer;
          this.playerLayer = playerLayer;
        }

        getPlayerEntityId() {
          return this.playerId;
        }

        onTileTapped(pos) {
          var inputEntity = this.entityManager.createEntity();
          var input = new (_crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
            error: Error()
          }), InputComponent) : InputComponent)(this.playerId, (_crd && InputNames === void 0 ? (_reportPossibleCrUseOfInputNames({
            error: Error()
          }), InputNames) : InputNames).Move, pos);
          this.entityManager.addComponent(inputEntity, input, _crd && InputComponent === void 0 ? (_reportPossibleCrUseOfInputComponent({
            error: Error()
          }), InputComponent) : InputComponent);
        }

        updateSystems(dt) {
          this.inputSystem.update(dt);
          this.movementSystem.update(dt);
          this.renderSystem.update(dt); // this.combatSystem.update(dt);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75140fa82369cdf77804127f8903fd5dc8157656.js.map