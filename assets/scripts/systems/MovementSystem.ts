import { AttackIntent } from "../components/intent/AttackIntent";
import { MoveIntent } from "../components/intent/MoveIntent";
import { Position } from "../components/Position";
import { EnemyTag } from "../components/Tag/EnemyTag";
import { EntityManager } from "../core/EntityManager";
import { eventBus } from "../core/EventBus";
import { findPathInTemplate } from "../core/Pathfinding";
import { RoomTemplate } from "../data/types";

export class MovementSystem {
    constructor(
        private em: EntityManager,
        private currentRoom: RoomTemplate[]
    ) { }

    private RoomNumber: number = 0;

    public update(dt: number) {
        for (const actor of this.em.getEntityWithComponent(MoveIntent)) {
            const mi = this.em.getComponent(actor, MoveIntent)!;
            const start = this.em.getComponent(actor, Position)!;
            const goal = mi.target;

            // 1) находим полный путь
            const path = findPathInTemplate(this.currentRoom[this.RoomNumber], start, goal) || [];

            // 2) удаляем intent — дальше займётся RenderSystem
            this.em.removeComponent(actor, MoveIntent);

            // 3) эмитим даже пустой путь, чтобы всегда было событие
            eventBus.emit("movePath", { entity: actor, path });
        }

        // если есть ловушка
        /*const trap = occupants.find(id => this.entityManager.hasComponent(id, TrapComponent));
        if (trap != null) {
            this.entityManager.addComponent(actor, new TrapIntent(trap), TrapIntent);
            continue;
        }*/

        // …другие проверки: двери → TransitionIntent и т.п.
    }

    /*private findEntitiesAtPosition(x: number, y: number): number[] {
        const result: number[] = [];
        for (const id of this.em.getEntityWithComponent(Position)) {
            const p = this.em.getComponent(id, Position)!;
            if (p.x === x && p.y === y) result.push(id);
        }
    return result;
    }*/
}
