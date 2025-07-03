/*import { eventBus }        from '../core/EventBus';
import { EntityManager }   from '../core/EntityManager';
import { Position }        from '../components/Position';
import { Trap } from '../components/Trap';

export class TrapSystem {
  constructor(private em: EntityManager) {
    // подписываемся на окончание движения
    eventBus.on('moveComplete', this.onMoveComplete.bind(this));
  }

  private onMoveComplete(payload: { entity: number }) {
    const actor = payload.entity;
    // получаем позицию, куда встал актор
    const pos = this.em.getComponent(actor, Position);
    if (!pos) return;

    // ищем все сущности-ловушки на этой клеткеs
    const traps = this.em.getEntityWithComponent(Trap)
      .filter(trapId => {
        const trapPos = this.em.getComponent(trapId, Position);
        return trapPos?.x === pos.x && trapPos?.y === pos.y;
      });

    // для каждой найденной ловушки эмитим событие
    for (const trapId of traps) {
      const trap = this.em.getComponent(trapId, Trap)!;
      console.log(`[TrapSystem] entity ${actor} triggered trap ${trapId} for ${trap.damage} dmg`);
      eventBus.emit('trapTriggered', {
        entity: actor,
        trap: trapId,
        damage: trap.damage,
      });
    }
  }
}*/

import { eventBus }      from '../core/EventBus';
import { EntityManager } from '../core/EntityManager';
import { Damage }        from '../components/Damage';

export class TrapSystem {
  constructor(private em: EntityManager) {
    eventBus.on('trapTriggered', this.onTrapTriggered.bind(this));
  }

  private onTrapTriggered({ entity, trap }: { entity: number; trap: number }) {
    const dmgComp = this.em.getComponent(trap, Damage);
    const damage = dmgComp ? dmgComp.damage : 1;  // default 1
    console.log(`[TrapSystem] Entity ${entity} hit trap ${trap}, damage = ${damage}`);
    // тут можно эмитить событие о нанесённом уроне или сразу добавлять компонент:
    // const dmgEnt = this.em.createEntity();
    // this.em.addComponent(dmgEnt, new DamageIntent(entity, damage), DamageIntent);
  }
}

