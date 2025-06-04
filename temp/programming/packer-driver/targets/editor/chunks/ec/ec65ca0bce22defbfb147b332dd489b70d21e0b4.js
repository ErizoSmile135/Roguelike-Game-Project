System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EntityManager, RenderSystem, RoomSystem, GameManager, _crd;

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
          this.entityManager = new (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
            error: Error()
          }), EntityManager) : EntityManager)();
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
          }), RoomSystem) : RoomSystem)(this.entityManager, this.roomTemplate);
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec65ca0bce22defbfb147b332dd489b70d21e0b4.js.map