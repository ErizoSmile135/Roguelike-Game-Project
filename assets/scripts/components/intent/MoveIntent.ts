import { Position } from "../Position";

export class MoveIntent {
  //public path: Position[] | null = null; 
  constructor(public target: Position) {}
}