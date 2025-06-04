import { Prefab, Node } from "cc";
import { PrefabKey, RoomTemplate } from "../data/types";
import { EntityManager } from "./EntityManager";
import { RenderSystem } from "../systems/RenderSystem";
import { RoomSystem } from "../systems/RoomSystem";

export class GameManager {
    private entityManager: EntityManager;
    private prefabs: Record<PrefabKey, Prefab> = {} as Record<PrefabKey, Prefab>;
    private roomTemplate: RoomTemplate[] = [];
    private gameRoot: Node = null!;

    public renderSystem!: RenderSystem;
    public roomSystem!: RoomSystem;

    constructor(){
        this.entityManager = new EntityManager();
    }

    /*  Паттерн синглтона через геттер (я использовал экспорт в Game)
    private static _instance: GameManager;
    static get instance(): GameManager {
      if (!this._instance) {
        this._instance = new GameManager();
      }
      return this._instance;
    }
    private constructor() {}*/

    initializeRoomTemplate(templates: RoomTemplate[]) {
        this.roomTemplate = templates;
    }

    initializeSystems(){
        this.renderSystem = new RenderSystem(this.entityManager, this.prefabs, this.gameRoot);
        this.roomSystem = new RoomSystem(this.entityManager, this.roomTemplate);
    }

    setPrefabs(prefabs: Record<PrefabKey, Prefab>){
        this.prefabs = prefabs;
    }

    getPrefab(name: PrefabKey): Prefab | null {
        return this.prefabs[name] || null;
    }

    setGameRoot(gameRoot: Node){
        this.gameRoot = gameRoot;
    }
}

