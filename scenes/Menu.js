class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "paw rocket patrol menu");

        // change scenes
        this.scene.start("playScene");
    }
}