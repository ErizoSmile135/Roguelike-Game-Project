System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Node, gameManager, initializeGame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, SceneController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgameManager(extras) {
    _reporterNs.report("gameManager", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitializeGame(extras) {
    _reporterNs.report("initializeGame", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      gameManager = _unresolved_2.gameManager;
      initializeGame = _unresolved_2.initializeGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e44d9F9ZjFFi5+VpYT101w7", "SceneController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneController", SceneController = (_dec = ccclass('SceneController'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = class SceneController extends Component {
        constructor() {
          super(...arguments);
          this._ready = false;

          _initializerDefineProperty(this, "tilePrefab", _descriptor, this);

          _initializerDefineProperty(this, "playerPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "gameRoot", _descriptor4, this);

          _initializerDefineProperty(this, "tilesLayer", _descriptor5, this);

          _initializerDefineProperty(this, "entityLayer", _descriptor6, this);
        }

        onLoad() {
          SceneController._instance = this;
        }

        start() {
          var prefabs = {
            Tile: this.tilePrefab,
            Player: this.playerPrefab,
            Enemy: this.enemyPrefab
          };
          (_crd && initializeGame === void 0 ? (_reportPossibleCrUseOfinitializeGame({
            error: Error()
          }), initializeGame) : initializeGame)(() => {
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).setPrefabs(prefabs);
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).setGameRoot(this.gameRoot, this.tilesLayer, this.entityLayer);
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).createPlayer();
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).initializeSystems();
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).roomSystem.createRoom();
            (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
              error: Error()
            }), gameManager) : gameManager).renderSystem.render();
            this._ready = true;
          });
        }
        /*onTap(position: Position) {
            const playerId = gameManager.getPlayerEntityId();
            const input = new InputComponent(playerId, 'move', position);
            gameManager.handleInput(input);
        }*/


        onTileTapped(position) {
          (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
            error: Error()
          }), gameManager) : gameManager).onTileTapped(position);
        }

        update(deltaTime) {
          if (!this._ready) return;
          (_crd && gameManager === void 0 ? (_reportPossibleCrUseOfgameManager({
            error: Error()
          }), gameManager) : gameManager).updateSystems(deltaTime);
        }

      }, _class3._instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tilePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tilesLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "entityLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94317284bb56dd3447ae826f57fdae269c2850c9.js.map