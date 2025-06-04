import { Damage } from "../components/Damage";
import { EnemyTag } from "../components/EnemyTag";
import { Health } from "../components/Health";
import { PlayerTag } from "../components/PlayerTag";
import { Position } from "../components/Position";
import { TileTag } from "../components/TileTag";
import { EntityManager } from "../core/EntityManager";
import { RoomTemplate } from "../data/types";

export class RoomSystem {
    constructor(private entityManager: EntityManager, 
                   public roomTemplate: RoomTemplate[]){}

    createRoom(){
      const width = this.roomTemplate[0].width;
      const height = this.roomTemplate[0].height;
      
      for (let i = 0; i < height; i++){
         for (let j = 0; j < width; j++){
            const entityId = this.entityManager.createEntity();
            this.entityManager.addComponent(entityId, TileTag, TileTag);
            this.entityManager.addComponent(entityId, new Position(j, i), Position);

            if (this.roomTemplate[0].layout[i][j] == 'E'){
               const enemyId = this.entityManager.createEntity();
               this.entityManager.addComponent(enemyId, EnemyTag, EnemyTag);
               this.entityManager.addComponent(enemyId, new Health(100), Health);
               this.entityManager.addComponent(enemyId, new Damage(5), Damage);
               this.entityManager.addComponent(enemyId, new Position(j, i), Position);
            }

            if (this.roomTemplate[0].layout[i][j] == 'P'){
               if(!this.entityManager.getEntityWithComponent(PlayerTag)[0]){
                  const playerId = this.entityManager.createEntity();
                  this.entityManager.addComponent(playerId, PlayerTag, PlayerTag);
                  this.entityManager.addComponent(playerId, new Health(100), Health);
                  this.entityManager.addComponent(playerId, new Damage(10), Damage);
                  this.entityManager.addComponent(playerId, new Position(j, i), Position);
               }
               else {
                  const playerId = this.entityManager.getEntityWithComponent(PlayerTag)[0];
                  const playerPosition = this.entityManager.getComponent(playerId, Position);
                  if(playerPosition){
                     playerPosition.x = j;
                     playerPosition.y = i;
                  } 
               }
            }
         }
      }
   }
}

