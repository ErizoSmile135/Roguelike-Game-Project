System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EntityManager, RenderSystem, RoomSystem, InputSystem, PlayerTag, Health, Damage, Position, GameManager, _crd;

  function _reportPossibleCrUseOfPrefabKey(extras) {
    _reporterNs.report("PrefabKey", "../data/types", _context.meta, extras);
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
    _reporterNs.report("PlayerTag", "../components/PlayerTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealth(extras) {
    _reporterNs.report("Health", "../components/Health", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamage(extras) {
    _reporterNs.report("Damage", "../components/Damage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputComponent(extras) {
    _reporterNs.report("InputComponent", "../components/InputComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
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
      Position = _unresolved_9.Position;
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
          this.playerId = null;
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
          }), RenderSystem) : RenderSystem)(this.entityManager, this.prefabs, this.gameRoot);
          this.roomSystem = new (_crd && RoomSystem === void 0 ? (_reportPossibleCrUseOfRoomSystem({
            error: Error()
          }), RoomSystem) : RoomSystem)(this.entityManager, this.roomTemplate, this.playerId);
          this.inputSystem = new (_crd && InputSystem === void 0 ? (_reportPossibleCrUseOfInputSystem({
            error: Error()
          }), InputSystem) : InputSystem)(this.entityManager, this.playerId);
        }

        setPrefabs(prefabs) {
          this.prefabs = prefabs;
        }

        getPrefab(name) {
          return this.prefabs[name] || null;
        }

        setGameRoot(gameRoot) {
          this.gameRoot = gameRoot;
        }

        getPlayerEntityId() {
          return this.playerId;
        }

        handlePlayerInput(input) {
          this.inputSystem.handleInput(input);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41cb24e4e84f5835d921c016eed312c4740fa984.js.map