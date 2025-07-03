System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Position, _crd;

  /**
   * Ищет путь по шаблону комнаты. 
   * @param template – шаблон с layout[y][x] 
   * @param start    – текущая клетка игрока
   * @param goal     – целевая клетка (куда тапнули)
   * @returns список позиций по кратчайшему пути (без start) или null
   */
  function findPathInTemplate(template, start, goal) {
    var layout = template.layout;
    var rows = layout.length;
    var cols = layout[0].length;

    var key = p => p.x + "," + p.y; // Проверяет, что (x,y) в пределах и не стена и не чужой враг


    function isPassable(x, y) {
      if (x < 0 || x >= cols || y < 0 || y >= rows) return false;
      var ch = layout[y][x];
      if (ch === "#") return false; // стена

      if (ch === "E" && !(x === goal.x && y === goal.y)) {
        return false; // враг, но не цель
      } // '.', 'P', или 'E' в точке goal


      return true;
    } // BFS


    var frontier = [new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
      error: Error()
    }), Position) : Position)(start.x, start.y)];
    var visited = new Set([key(start)]);
    var parent = new Map([[key(start), ""]]);
    var dirs = [{
      x: 1,
      y: 0
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 1
    }, {
      x: 0,
      y: -1
    }];

    while (frontier.length > 0) {
      var cur = frontier.shift();
      if (cur.x === goal.x && cur.y === goal.y) break;

      for (var d of dirs) {
        var nx = cur.x + d.x,
            ny = cur.y + d.y;
        var k = nx + "," + ny;
        if (visited.has(k)) continue;
        if (!isPassable(nx, ny)) continue;
        visited.add(k);
        parent.set(k, key(cur));
        frontier.push(new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
          error: Error()
        }), Position) : Position)(nx, ny));
      }
    } // Если goal не достигнут


    if (!parent.has(key(goal))) return null; // Восстанавливаем путь от goal к start

    var path = [];
    var curKey = key(goal);

    while (curKey !== "") {
      var [cx, cy] = curKey.split(",").map(Number);
      path.unshift(new (_crd && Position === void 0 ? (_reportPossibleCrUseOfPosition({
        error: Error()
      }), Position) : Position)(cx, cy));
      curKey = parent.get(curKey);
    }

    path.shift(); // убираем стартовую клетку

    return path;
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../data/types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  _export("findPathInTemplate", findPathInTemplate);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Position = _unresolved_2.Position;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02e766W+P5AxqIXwsjJMRPI", "Pathfinding", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b13ad1fab63288d27fade91c4aa9515129967e2b.js.map