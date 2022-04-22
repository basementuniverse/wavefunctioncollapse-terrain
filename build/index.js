class Game {
    constructor(container) {
        if (container === null) {
            throw new Error('A valid container element must be specified.');
        }
        if (container.tagName.toLowerCase() !== 'canvas') {
            throw new Error('Container element must be a canvas.');
        }
        this.canvas = container;
        const context = this.canvas.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Couldn't get a 2d context.");
        }
    }
    initialise() {
        console.log('Hello, world!');
    }
}
window.onload = () => {
    const game = new Game(document.querySelector('#main'));
    game.initialise();
};
//# sourceMappingURL=index.js.map