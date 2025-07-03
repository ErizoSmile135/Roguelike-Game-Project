import { eventBus }   from '../core/EventBus';
import { EntityManager } from '../core/EntityManager';
import { Health }     from '../components/Health';

export class CombatSystem {
  constructor(private em: EntityManager) {
    eventBus.on('attackStart', this.onAttackStart.bind(this));
  }

  private onAttackStart({ attacker, target }: { attacker: number; target: number }) {
    console.log(`[CombatSystem] ${attacker} атакует ${target}`);

    // тут можно сразу уменьшить здоровье:
    const hp = this.em.getComponent(target, Health);
    if (hp) {
      hp.health -= 1;   // условно урон = 1
      console.log(`[CombatSystem] у ${target} осталось HP=${hp.health}`);
      if (hp.health <= 0) {
        this.destroyEntity(target);
      }
    }

    // и кидаем сигнал о завершении боя, когда понадобится:
    // eventBus.emit('attackComplete', { attacker, target });
  }

  private destroyEntity(id: number) {
    // удаляем ноду и все компоненты
    this.em.removeEntity(id);
    console.log(`[CombatSystem] сущность ${id} уничтожена`);
  }
}
