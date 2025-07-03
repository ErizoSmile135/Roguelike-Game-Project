import { _decorator, Component, Prefab, Node, Vec2 } from 'cc';
import { gameManager, initializeGame } from './Game';
import { InputComponent } from '../components/core/InputComponent';
import { Position } from '../components/Position';
const { ccclass, property } = _decorator;

@ccclass('SceneController')
export class SceneController extends Component {
    public static _instance: SceneController;
    private _ready = false;

    @property({ type: Prefab })
    private tilePrefab: Prefab = null!;
    @property({ type: Prefab })
    private playerPrefab: Prefab = null!;
    @property({ type: Prefab })
    private enemyPrefab: Prefab = null!;

    @property({ type: Node })
    private gameRoot: Node = null!;
    @property({ type: Node })
    private tilesLayer: Node = null!;
    @property({ type: Node })
    private entityLayer: Node = null!;
    @property({ type: Node })
    private playerLayer: Node = null!;

    onLoad() {
        SceneController._instance = this;
    }

    start() {
        const prefabs = {
            Tile: this.tilePrefab,
            Player: this.playerPrefab,
            Enemy: this.enemyPrefab
        };

        initializeGame(() => {
            gameManager.setPrefabs(prefabs);
            gameManager.setGameRoot(this.gameRoot, this.tilesLayer, this.entityLayer, this.playerLayer);
            gameManager.createPlayer();
            gameManager.initializeSystems();
            gameManager.roomSystem.createRoom();
            gameManager.renderSystem.render();
            this._ready = true;
        })
    }

    /*onTap(position: Position) {
        const playerId = gameManager.getPlayerEntityId();
        const input = new InputComponent(playerId, 'move', position);
        gameManager.handleInput(input);
    }*/

    onTileTapped(position: Position) {
        gameManager.onTileTapped(position);
    }

    update(deltaTime: number) {
        if (!this._ready) return;
        gameManager.updateSystems(deltaTime);
    }
}

