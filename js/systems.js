class Input {
    constructor() {
        this.keyMap = new Map();
    }

    add(key, action) {
        this.keyMap.set(game.input.keyboard.addKey(key), action);
    }

    update() {
        for (const [key, action] of this.keyMap.entries()) {
            if (key.isDown) {
                action();
            }
        }
    }
}
