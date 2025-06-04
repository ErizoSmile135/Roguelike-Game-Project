import { instantiate, Prefab, Vec3, Node } from "cc";
import { PrefabKey } from "../data/types";
import { EntityManager } from "../core/EntityManager";
import { PlayerTag } from "../components/PlayerTag";
import { PrefabNames } from "../data/consts";
import { EnemyTag } from "../components/EnemyTag";
import { TileTag } from "../components/TileTag";
import { Position } from "../components/Position";
import { ViewComponent } from "../components/ViewComponent";

export class RenderSystem {
    constructor(private entityManager: EntityManager,
                private prefabs: Record<PrefabKey, Prefab>,
                private gameRoot: Node
    ){}

    getPrefabName(entityId: number): PrefabKey | null {
        if (this.entityManager.hasComponent(entityId, PlayerTag)) return PrefabNames.Player;
        if (this.entityManager.hasComponent(entityId, EnemyTag)) return PrefabNames.Enemy;
        if (this.entityManager.hasComponent(entityId, TileTag)) return PrefabNames.Tile;
        return null;
    }

    render(){
        const entities = this.entityManager.getEntityWithComponent(Position);

        for (const id of entities) {
            const prefabName = this.getPrefabName(id);
            if (!prefabName) continue;
            const position = this.entityManager.getComponent(id, Position);
            if (!position) continue;

            let view = this.entityManager.getComponent(id, ViewComponent);
            if(!view){
                view = new ViewComponent(prefabName);
                this.entityManager.addComponent(id, view, ViewComponent);
                
                const prefab = this.prefabs[prefabName];
                const node = instantiate(prefab);
                node.setPosition(new Vec3(position.x * 32, position.y * 32, 0));
                this.gameRoot.addChild(node);

                view.node = node;       
                console.log('add ' + prefabName + position.x + position.y)
                //console.log("Added node", node.name, "at", node.getPosition());
                //console.log(node.isValid, node.activeInHierarchy, node.getWorldPosition());
            }
        }
    }
}

