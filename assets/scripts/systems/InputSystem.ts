import { EntityManager } from "../core/EntityManager";
import { InputComponent } from "../components/core/InputComponent";
import { MoveIntent } from "../components/intent/MoveIntent";

export class InputSystem {
  constructor(
    private entityManager: EntityManager,
    private playerId: number
  ) { }

  public update(dt: number) {
    for (const eid of this.entityManager.getEntityWithComponent(InputComponent)) {
      const { entity, target } = this.entityManager.getComponent(eid, InputComponent)!;
      this.entityManager.addComponent(entity, new MoveIntent(target), MoveIntent);
      this.entityManager.removeEntity(eid);
    }
  }
}
