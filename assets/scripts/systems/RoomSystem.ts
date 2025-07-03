import { Damage } from "../components/Damage";
import { EnemyTag } from "../components/Tag/EnemyTag";
import { Health } from "../components/Health";
import { Position } from "../components/Position";
import { TileTag } from "../components/Tag/TileTag";
import { EntityManager } from "../core/EntityManager";
import { RoomTemplate } from "../data/types";
import { Trap } from "../components/Trap";

export class RoomSystem {
   constructor(
      private em: EntityManager,
      public roomTemplate: RoomTemplate[],
      private playerId: number
   ) { }

   createRoom() {
      const width = this.roomTemplate[0].width;
      const height = this.roomTemplate[0].height;

      for (let i = 0; i < height; i++) {
         for (let j = 0; j < width; j++) {
            if (this.isPassable(this.roomTemplate[0].layout[i][j])) {
               const entityId = this.em.createEntity();
               this.em.addComponent(entityId, new TileTag(), TileTag);
               this.em.addComponent(entityId, new Position(j, i), Position);
            }

            if (this.roomTemplate[0].layout[i][j] == 'T') {
               const trapId = this.em.createEntity();
               this.em.addComponent(trapId, new Position(j, i), Position);
               this.em.addComponent(trapId, new Trap(), Trap);
               this.em.addComponent(trapId, new Damage(2), Damage);
            }

            if (this.roomTemplate[0].layout[i][j] == 'E') {
               const enemyId = this.em.createEntity();
               this.em.addComponent(enemyId, new EnemyTag(), EnemyTag);
               this.em.addComponent(enemyId, new Health(100), Health);
               this.em.addComponent(enemyId, new Damage(5), Damage);
               this.em.addComponent(enemyId, new Position(j, i), Position);
            }

            if (this.roomTemplate[0].layout[i][j] == 'P') {
               const playerPosition = this.em.getComponent(this.playerId, Position);
               if (playerPosition) {
                  playerPosition.x = j;
                  playerPosition.y = i;
               }
            }
         }
      }
   }

   isPassable(ch: string): boolean {
      return ch === '.' || ch === 'P' || ch === 'E' || ch === 'T';
   }
}

