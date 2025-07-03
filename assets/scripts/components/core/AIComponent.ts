export class AIComponent {
    constructor(
        public behavior: 'aggressive' | 'defensive',
        public targetId?: number
    ) {}
}