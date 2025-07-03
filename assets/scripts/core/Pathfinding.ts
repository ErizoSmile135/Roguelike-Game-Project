import { RoomTemplate } from "../data/types";
import { Position } from "../components/Position";


/**
 * Ищет путь по шаблону комнаты. 
 * @param template – шаблон с layout[y][x] 
 * @param start    – текущая клетка игрока
 * @param goal     – целевая клетка (куда тапнули)
 * @returns список позиций по кратчайшему пути (без start) или null
 */
export function findPathInTemplate(
    template: RoomTemplate,
    start: Position,
    goal: Position
): Position[] | null {
    const layout = template.layout;
    const rows = layout.length;
    const cols = layout[0].length;
    const key = (p: Position) => `${p.x},${p.y}`;

    // Проверяет, что (x,y) в пределах и не стена и не чужой враг
    function isPassable(x: number, y: number): boolean {
        if (x < 0 || x >= cols || y < 0 || y >= rows) return false;
        const ch = layout[y][x];
        if (ch === "#") return false;          // стена
        if (ch === "E" && !(x === goal.x && y === goal.y)) {
            return false;                        // враг, но не цель
        }
        // '.', 'P', или 'E' в точке goal
        return true;
    }

    // BFS
    const frontier: Position[] = [new Position(start.x, start.y)];
    const visited = new Set<string>([key(start)]);
    const parent = new Map<string, string>([[key(start), ""]]);

    const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
    ];

    while (frontier.length > 0) {
        const cur = frontier.shift()!;
        if (cur.x === goal.x && cur.y === goal.y) break;

        for (const d of dirs) {
            const nx = cur.x + d.x, ny = cur.y + d.y;
            const k = `${nx},${ny}`;
            if (visited.has(k)) continue;
            if (!isPassable(nx, ny)) continue;
            visited.add(k);
            parent.set(k, key(cur));
            frontier.push(new Position(nx, ny));
        }
    }

    // Если goal не достигнут
    if (!parent.has(key(goal))) return null;

    // Восстанавливаем путь от goal к start
    const path: Position[] = [];
    let curKey = key(goal);
    while (curKey !== "") {
        const [cx, cy] = curKey.split(",").map(Number);
        path.unshift(new Position(cx, cy));
        curKey = parent.get(curKey)!;
    }
    path.shift(); // убираем стартовую клетку
    return path;
}
