//import { PrefabNames } from "./consts";

import { InputNames, PrefabNames } from "./consts";

export type PrefabType = typeof PrefabNames[keyof typeof PrefabNames];
export type InputType = typeof InputNames[keyof typeof InputNames];

export type RoomTemplate = {
  width: number;
  height: number;
  layout: string[];
};