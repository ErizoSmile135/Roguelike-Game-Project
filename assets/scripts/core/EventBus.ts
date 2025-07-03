/*import { Position } from "../components/Position";

export interface EventMap {
  movePath:         { entity: number; path: Position[] };
  moveComplete:     { entity: number };
  trapTriggered:  { entity: number; trap: number; damage: number };
}

export class EventBus {
  private listeners: {
    [E in keyof EventMap]?: Set<(payload: EventMap[E]) => void>
  } = {};

  // Подписка
  public on<E extends keyof EventMap>(
    event: E,
    fn: (payload: EventMap[E]) => void
  ) {
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }
    this.listeners[event]!.add(fn);
  }

  // Отписка
  public off<E extends keyof EventMap>(
    event: E,
    fn: (payload: EventMap[E]) => void
  ) {
    this.listeners[event]?.delete(fn);
  }

  // Испускание
  public emit<E extends keyof EventMap>(
    event: E,
    payload: EventMap[E]
  ) {
    this.listeners[event]?.forEach(fn => fn(payload));
  }
}

export const eventBus = new EventBus();*/

import { Position } from '../components/Position';

export interface EventMap {
  movePath:       { entity: number; path: Position[] };
  moveComplete:   { entity: number };
  trapTriggered:  { entity: number; trap: number };
  attackStart:    { attacker: number; target: number };
}

export type EventKey = keyof EventMap;

export class EventBus {
  // Храним слушателей в виде map<string, Set<Function>>
  // — в рантайме все подписчики лежат здесь, а типовую проверку мы делаем в on()/emit()
  private listeners: Record<string, Set<Function>> = {};

  /**
   * Подписка на событие.
   * E — конкретный ключ из EventMap.
   * fn — функция, принимающая правильный payload.
   */
  public on<E extends EventKey>(
    event: E,
    fn: (payload: EventMap[E]) => void
  ): void {
    // создаём Set<Function> при первой подписке
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }
    this.listeners[event]!.add(fn);
  }

  /**
   * Отписка от события.
   */
  public off<E extends EventKey>(
    event: E,
    fn: (payload: EventMap[E]) => void
  ): void {
    this.listeners[event]?.delete(fn as Function);
  }

  /**
   * Эмит события.
   */
  public emit<E extends EventKey>(
    event: E,
    payload: EventMap[E]
  ): void {
    this.listeners[event]?.forEach((fn) =>
      // приводим к нужному типу
      (fn as (p: EventMap[E]) => void)(payload)
    );
  }
}

// глобальный экспорт
export const eventBus = new EventBus();


