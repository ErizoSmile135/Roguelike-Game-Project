import { instantiate, Prefab, Vec3, Node, UITransform, tween } from "cc";
import { EntityManager } from "../core/EntityManager";
import { PlayerTag } from "../components/Tag/PlayerTag";
import { PrefabNames } from "../data/consts";
import { EnemyTag } from "../components/Tag/EnemyTag";
import { TileTag } from "../components/Tag/TileTag";
import { Position } from "../components/Position";
import { ViewComponent } from "../components/core/ViewComponent";
import { SceneController } from "../core/SceneController";
import { PrefabType } from "../data/types";
import { eventBus } from "../core/EventBus";
import { Trap } from "../components/Trap";

export class RenderSystem {
    constructor(private em: EntityManager,
        private prefabs: Record<PrefabType, Prefab>,
        private gameRoot: Node,
        private tilesLayer: Node,
        private entityLayer: Node,
        private playerLayer: Node,
        private tileSize: number = 64,
        private stepDuration: number = 0.15
    ) {
        eventBus.on('movePath', this.onMovePath.bind(this));
    }

    getPrefabName(entityId: number): PrefabType | null {
        if (this.em.hasComponent(entityId, PlayerTag)) return PrefabNames.Player;
        if (this.em.hasComponent(entityId, EnemyTag)) return PrefabNames.Enemy;
        if (this.em.hasComponent(entityId, TileTag)) return PrefabNames.Tile;
        return null;
    }

    render() {
        const entities = this.em.getEntityWithComponent(Position);

        for (const id of entities) {
            const prefabName = this.getPrefabName(id);
            if (!prefabName) continue;
            const position = this.em.getComponent(id, Position);
            if (!position) continue;

            let view = this.em.getComponent(id, ViewComponent);
            if (!view) {
                console.log(prefabName);
                view = new ViewComponent(prefabName);
                this.em.addComponent(id, view, ViewComponent);

                const prefab = this.prefabs[prefabName];
                const node = instantiate(prefab);
                node.setPosition(new Vec3(position.x * this.tileSize, position.y * this.tileSize, 0));

                if (prefabName === PrefabNames.Tile)
                    node.on(Node.EventType.TOUCH_END, () => {
                        SceneController._instance?.onTileTapped(position);
                    });

                if (prefabName === PrefabNames.Player)
                    this.playerLayer.addChild(node);
                else if (prefabName === PrefabNames.Tile)
                    this.tilesLayer.addChild(node);
                else if (prefabName === PrefabNames.Enemy)
                    this.entityLayer.addChild(node);

                view.node = node;
            }
        }
    }

    /*private onMovePath(payload: { entity: number; path: Position[] }) {
        const { entity, path } = payload;
        const viewComp = this.em.getComponent(entity, ViewComponent);
        if (!viewComp?.node) return;

        const node = viewComp.node;
        const z = node.getPosition().z;

        // Начинаем chain tween-а
        let seq = tween(node);

        path.forEach((step, idx) => {
            const targetPos = new Vec3(
                step.x * this.tileSize,
                step.y * this.tileSize,
                z
            );

            seq = seq
                .to(this.stepDuration, { position: targetPos })
                .call(() => {
                    // На каждом шаге сразу обновляем ECS-Position
                    const pos = this.em.getComponent(entity, Position);
                    if (pos) {
                        pos.x = step.x;
                        pos.y = step.y;
                    }
                    // Если последний шаг — сообщаем о завершении
                    if (idx === path.length - 1) {
                        eventBus.emit("moveComplete", { entity });
                    }
                });
        });

        seq.start();
    }*/

    /*private onMovePath({ entity, path }: { entity: number; path: Position[] }) {
        const view = this.em.getComponent(entity, ViewComponent);
        if (!view?.node) return;

        const node = view.node;
        const z = node.getPosition().z;

        // рекурсивная функция для по-шаговой анимации
        const animateStep = (idx: number) => {
            if (idx >= path.length) {
                // закончили путь без попадания в ловушку
                eventBus.emit('moveComplete', { entity });
                return;
            }
            const step = path[idx];
            const target = new Vec3(
                step.x * this.tileSize,
                step.y * this.tileSize,
                z
            );

            tween(node)
                .to(this.stepDuration, { position: target })
                .call(() => {
                    // 1) Синхронизируем ECS-Position
                    const pos = this.em.getComponent(entity, Position)!;
                    pos.x = step.x;
                    pos.y = step.y;

                    // 2) Проверяем ловушки на этой клетке
                    const trapIds = this.em.getEntityWithComponent(Trap)
                        .filter(tid => {
                            const p = this.em.getComponent(tid, Position)!;
                            return p.x === step.x && p.y === step.y;
                        });
                    if (trapIds.length > 0) {
                        // берём первую ловушку, останавливаем движение
                        const trapId = trapIds[0];
                        eventBus.emit('trapTriggered', { entity, trap: trapId });
                        return;
                    }

                    // 3) Идём к следующему шагу
                    animateStep(idx + 1);
                })
                .start();
        };

        // стартуем с первого шага
        animateStep(0);
    }*/

    private onMovePath({ entity, path }: { entity: number; path: Position[] }) {
        const view = this.em.getComponent(entity, ViewComponent);
        if (!view?.node || path.length === 0) return;

        const node = view.node;
        const z = node.getPosition().z;

        const animateStep = (idx: number) => {
            if (idx >= path.length) {
                // 1) Закончили движение
                eventBus.emit('moveComplete', { entity });

                // 2) Проверяем, есть ли враг на той же клетке
                const pos = this.em.getComponent(entity, Position)!;
                const enemies = this.em.getEntityWithComponent(EnemyTag)
                    .filter(eid => {
                        const p = this.em.getComponent(eid, Position)!;
                        return p.x === pos.x && p.y === pos.y;
                    });
                if (enemies.length > 0) {
                    // Первый враг — цель атаки
                    eventBus.emit('attackStart', {
                        attacker: entity,
                        target: enemies[0]
                    });
                }
                return;
            }

            const step = path[idx];
            const target = new Vec3(
                step.x * this.tileSize,
                step.y * this.tileSize,
                z
            );

            tween(node)
                .to(this.stepDuration, { position: target })
                .call(() => {
                    // а) Синхронизируем логику
                    const pos = this.em.getComponent(entity, Position)!;
                    pos.x = step.x;
                    pos.y = step.y;

                    // б) Проверяем ловушки
                    const trapIds = this.em.getEntityWithComponent(Trap)
                        .filter(tid => {
                            const p = this.em.getComponent(tid, Position)!;
                            return p.x === step.x && p.y === step.y;
                        });
                    if (trapIds.length > 0) {
                        eventBus.emit('trapTriggered', {
                            entity,
                            trap: trapIds[0]
                        });
                        return;
                    }

                    // в) Идём к следующему шагу
                    animateStep(idx + 1);
                })
                .start();
        };

        animateStep(0);
    }

    update(dt: number) {

    }
}

