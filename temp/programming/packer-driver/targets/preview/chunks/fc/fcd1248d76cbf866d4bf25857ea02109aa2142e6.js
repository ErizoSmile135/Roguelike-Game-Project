System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, resources, JsonAsset, _crd, RoomPaths, CELL_SIZE, RoomTemplates;

  function loadRoomTemplates(callback) {
    var loaded = 0;

    var _loop = function _loop(path) {
      resources.load(path, JsonAsset, (err, asset) => {
        if (err) {
          console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 " + path, err);
          return;
        }

        RoomTemplates.push(asset.json);
        loaded++;

        if (loaded === RoomPaths.length) {
          callback();
        }
      });
    };

    for (var path of RoomPaths) {
      _loop(path);
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
//# sourceMappingURL=fcd1248d76cbf866d4bf25857ea02109aa2142e6.js.map