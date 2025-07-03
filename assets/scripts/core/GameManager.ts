import { Prefab, Node } from "cc";
import { InputType, PrefabType, RoomTemplate } from "../data/types";
import { EntityManager } from "./EntityManager";
import { RenderSystem } from "../systems/RenderSystem";
import { RoomSystem } from "../systems/RoomSystem";
import { InputSystem } from "../systems/InputSystem";
import { PlayerTag } from "../components/Tag/PlayerTag";
import { Health } from "../components/Health";
import { Damage } from "../components/Damage";
import { InputComponent } from "../components/core/InputComponent";
import { Position } from "../components/Position";
import { InputNames } from "../data/consts";
import { MovementSystem } from "../systems/MovementSystem";
import { TrapSystem } from "../systems/TrapSystem";
import { CombatSystem } from "../systems/CombatSystem";

export class GameManager {
    private entityManager: EntityManager;
    private prefabs: Record<PrefabType, Prefab> = {} as Record<PrefabType, Prefab>;
    private roomTemplate: RoomTemplate[] = [];
    private gameRoot: Node = null!;
    private tilesLayer: Node = null!;
    private entityLayer: Node = null!;
    private playerLayer: Node = null!;

    public renderSystem!: RenderSystem;
    public roomSystem!: RoomSystem;
    private inputSystem!: InputSystem;
    private movementSystem!: MovementSystem;
    private trapSystem!: TrapSystem;
    private combatSystem!: CombatSystem;

    private playerId: number | null = null;

    public tileSize: number = 64;

    constructor() {
        this.entityManager = new EntityManager();
    }

    createPlayer() {
        const id = this.entityManager.createEntity();
        this.entityManager.addComponent(id, new PlayerTag(), PlayerTag);
        this.entityManager.addComponent(id, new Position(0, 0), Position);
        this.entityManager.addComponent(id, new Health(100), Health);
        this.entityManager.addComponent(id, new Damage(10), Damage);
        this.playerId = id;
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

    initializeSystems() {
        this.renderSystem = new RenderSystem(
            this.entityManager, this.prefabs, this.gameRoot,
            this.tilesLayer, this.entityLayer, this.playerLayer);
        this.roomSystem = new RoomSystem(this.entityManager, this.roomTemplate, this.playerId);
        this.inputSystem = new InputSystem(this.entityManager, this.playerId);
        this.movementSystem = new MovementSystem(this.entityManager, this.roomTemplate);
        this.trapSystem = new TrapSystem(this.entityManager);
        this.combatSystem = new CombatSystem(this.entityManager);
    }

    setPrefabs(prefabs: Record<PrefabType, Prefab>) {
        this.prefabs = prefabs;
    }

    getPrefab(name: PrefabType): Prefab | null {
        return this.prefabs[name] || null;
    }

    setGameRoot(gameRoot: Node, tilesLayer: Node, entityLayer: Node, playerLayer: Node) {
        this.gameRoot = gameRoot;
        this.tilesLayer = tilesLayer;
        this.entityLayer = entityLayer;
        this.playerLayer = playerLayer;
    }

    getPlayerEntityId(): number {
        return this.playerId;
    }

    onTileTapped(pos: Position) {
        const inputEntity = this.entityManager.createEntity();
        const input = new InputComponent(this.playerId, InputNames.Move, pos);
        this.entityManager.addComponent(inputEntity, input, InputComponent);
    }

    updateSystems(dt: number) {
        this.inputSystem.update(dt);
        this.movementSystem.update(dt);
        this.renderSystem.update(dt);
        // this.combatSystem.update(dt);
    }
}

