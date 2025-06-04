import { loadRoomTemplates, RoomTemplates } from "../config/RoomConfig";
import { GameManager } from "./GameManager";

export const gameManager = new GameManager();

export function initializeGame(callback: () => void) {
  loadRoomTemplates(() => {
    gameManager.initializeRoomTemplate(RoomTemplates);
    callback();
  });
}

