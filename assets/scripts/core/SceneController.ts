import { _decorator, Component, Prefab, Node } from 'cc';
import { gameManager, initializeGame } from './Game';
const { ccclass, property } = _decorator;

@ccclass('SceneController')
export class SceneController extends Component {
    
    @property({ type: Prefab }) 
    private tilePrefab: Prefab = null!;
    @property({ type: Prefab }) 
    private playerPrefab: Prefab = null!;
    @property({ type: Prefab }) 
    private enemyPrefab: Prefab = null!;

    @property({ type: Node })
    private gameRoot: Node = null!;


    start() {
        const prefabs = {
            Tile: this.tilePrefab,
            Player: this.playerPrefab,
            Enemy: this.enemyPrefab
        };

        initializeGame(()=>{
            gameManager.setPrefabs(prefabs);
            gameManager.setGameRoot(this.gameRoot); 
            gameManager.initializeSystems();
            gameManager.roomSystem.createRoom();
            gameManager.renderSystem.render();
        })
    }

    update(deltaTime: number) {
        
    }
}

