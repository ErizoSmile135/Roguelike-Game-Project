import { PrefabNames } from "./consts";

export type PrefabKey = keyof typeof PrefabNames;

export type RoomTemplate = {
  width: number;
  height: number;
  layout: string[];
};