
import { Node } from "cc";
import { PrefabType } from "../../data/types";

export class ViewComponent {
    constructor(
        public prefabName: PrefabType,
        public node: Node| null = null
    ){}
}

