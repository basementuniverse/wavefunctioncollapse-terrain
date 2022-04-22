class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public constructor(container: HTMLElement | null) {
    if (container === null) {
      throw new Error('A valid container element must be specified.');
    }
    if (container.tagName.toLowerCase() !== 'canvas') {
      throw new Error('Container element must be a canvas.');
    }
    this.canvas = container as HTMLCanvasElement;

    // Get a 2d context
    const context = this.canvas.getContext('2d');
    if (context !== null) {
      this.context = context;
    } else {
      throw new Error("Couldn't get a 2d context.");
    }
  }

  public initialise(): void {
    console.log('Hello, world!');

    // ...
  }
}

window.onload = () => {
  const game = new Game(document.querySelector('#main'));
  game.initialise();
};
