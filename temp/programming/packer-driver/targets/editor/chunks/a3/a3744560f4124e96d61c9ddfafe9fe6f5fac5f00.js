System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, JsonAsset, _crd, RoomPaths, CELL_SIZE, RoomTemplates;

  function loadRoomTemplates(callback) {
    let loaded = 0;

    for (const path of RoomPaths) {
      resources.load(path, JsonAsset, (err, asset) => {
        if (err) {
          console.error(`Ошибка загрузки ${path}`, err);
          return;
        }

        RoomTemplates.push(asset.json);
        loaded++;

        if (loaded === RoomPaths.length) {
          callback();
        }
      });
    }
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../data/types", _context.meta, extras);
  }

  _export("loadRoomTemplates", loadRoomTemplates);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      JsonAsset = _cc.JsonAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a9fd/irR5Fj6pEpsxsy4M+", "RoomConfig", undefined);

      __checkObsolete__(['resources', 'JsonAsset']);

      _export("RoomPaths", RoomPaths = ['rooms/room1']);

      _export("CELL_SIZE", CELL_SIZE = 64);

      _export("RoomTemplates", RoomTemplates = []);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3744560f4124e96d61c9ddfafe9fe6f5fac5f00.js.map