import { PrefabKey } from "../data/types";
import { Node } from "cc";

export class ViewComponent {
    constructor(public prefabName: PrefabKey,
                public node: Node| null = null
    ){}
}

