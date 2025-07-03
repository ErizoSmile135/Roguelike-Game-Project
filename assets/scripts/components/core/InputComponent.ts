import { InputType } from "../../data/types";
import { Position } from "../Position";

export class InputComponent {
    constructor (
        public entity: number,
        public type: InputType,
        public target: Position  
    ){}
}