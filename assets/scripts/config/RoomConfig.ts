import { resources, JsonAsset } from 'cc';
import { RoomTemplate } from "../data/types";

export const RoomPaths = ['rooms/room1'];
export const CELL_SIZE = 64;

export const RoomTemplates: RoomTemplate[] = [];

export function loadRoomTemplates(callback: () => void) {
  let loaded = 0;

  for (const path of RoomPaths) {
    resources.load(path, JsonAsset, (err, asset) => {
      if (err) {
        console.error(`Ошибка загрузки ${path}`, err);
        return;
      }

      RoomTemplates.push(asset.json as RoomTemplate);
      loaded++;

      if (loaded === RoomPaths.length) {
        callback();
      }
    });
  }
}