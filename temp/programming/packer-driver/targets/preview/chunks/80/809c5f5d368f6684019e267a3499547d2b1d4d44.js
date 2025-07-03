System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Damage, EnemyTag, Health, Position, TileTag, RoomSystem, _crd;

  function _reportPossibleCrUseOfDamage(extras) {
    _reporterNs.report("Damage", "../components/Damage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyTag(extras) {
    _reporterNs.report("EnemyTag", "../components/Tag/EnemyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealth(extras) {
    _reporterNs.report("Health", "../components/Health", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileTag(extras) {
    _reporterNs.report("TileTag", "../components/Tag/TileTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../core/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../data/types", _context.meta, extras);
  }

  _export("RoomSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Damage = _unresolved_2.Damage;
    }, function (_unresolved_3) {
      EnemyTag = _unresolved_3.EnemyTag;
    }, function (_unresolved_4) {
      Health = _unresolved_4.Health;
    }, function (_unresolved_5) {
      Position = _unresolved_5.Position;
    }, function (_unresolved_6) {
      TileTag = _unresolved_6.TileTag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3061bCVwetCT5kp2PJfpKkq", "RoomSystem", undefined);

      _export("RoomSystem", RoomSystem = class RoomSystem {
        constructor(entityManager, roomTemplate, playerId) {
          this.entityManager = entityManager;
          this.roomTemplate = roomTemplate;
          this.playerId = playerId;
        }

        createRoom() {
          var width = this.roomTemplate[0].width;
          var height = this.roomTemplate[0].height;

          for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
              var entityId = this.entityManager.createEntity();
              this.entityManager.addComponent(entityId, new (_crd && TileTag === void 0 ? (_reportPossibleCrUseOfTileTag({
                error: Error()
              }), TileTag) : TileTag)(), _crd && TileTag === void 0 ? (_reportPossibleCrUseOfTileTag({
                error: Error()
              }), TileTag) : TileTag);
              this.entityManager.addComponent(entityId, new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position)(j, i), _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                error: Error()
              }), Position) : Position);

              if (this.roomTemplate[0].layout[i][j] == 'E') {
                var enemyId = this.entityManager.createEntity();
                this.entityManager.addComponent(enemyId, new (_crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
                  error: Error()
                }), EnemyTag) : EnemyTag)(), _crd && EnemyTag === void 0 ? (_reportPossibleCrUseOfEnemyTag({
                  error: Error()
                }), EnemyTag) : EnemyTag);
                this.entityManager.addComponent(enemyId, new (_crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
                  error: Error()
                }), Health) : Health)(100), _crd && Health === void 0 ? (_reportPossibleCrUseOfHealth({
                  error: Error()
                }), Health) : Health);
                this.entityManager.addComponent(enemyId, new (_crd && Damage === void 0 ? (_reportPossibleCrUseOfDamage({
                  error: Error()
                }), Damage) : Damage)(5), _crd && Damage === void 0 ? (_reportPossibleCrUseOfDamage({
                  error: Error()
                }), Damage) : Damage);
                this.entityManager.addComponent(enemyId, new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                  error: Error()
                }), Position) : Position)(j, i), _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                  error: Error()
                }), Position) : Position);
              }

              if (this.roomTemplate[0].layout[i][j] == 'P') {
                var playerPosition = this.entityManager.getComponent(this.playerId, _crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
                  error: Error()
                }), Position) : Position);

                if (playerPosition) {
                  playerPosition.x = j;
                  playerPosition.y = i;
                }
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=809c5f5d368f6684019e267a3499547d2b1d4d44.js.map