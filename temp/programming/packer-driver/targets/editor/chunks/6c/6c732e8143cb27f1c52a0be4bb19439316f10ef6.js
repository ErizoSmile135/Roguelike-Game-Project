System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, resources, JsonAsset, _crd, RoomPaths, CELL_SIZE, RoomTemplates;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      JsonAsset = _cc.JsonAsset;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['resources', 'JsonAsset']);

      _export("RoomPaths", RoomPaths = ['rooms/room1']);

      _export("CELL_SIZE", CELL_SIZE = 64);

      _export("RoomTemplates", RoomTemplates = []);

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c732e8143cb27f1c52a0be4bb19439316f10ef6.js.map