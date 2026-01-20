class travis {
	constructor(game) {
		this.game = game;
		this.animator1 = new animator(ASSET_MANAGER.getAsset("./Player_Travis.png"), 0, 0, 48, 48, 16, 0.1);
		this.animator2 = new animator(ASSET_MANAGER.getAsset("./Player_Travis_Death.png"), 0, 0, 48, 48, 7, 0.228571);

		this.x = 0;
		this.y = 0;
		this.speedX = 500;
	}

	update() {
		this.x += this.speedX * this.game.clockTick;
		this.y += this.speedY * this.game.clockTick;

		if(this.x > 1024) this.x = 0;
	}

	draw(ctx) {
		this.animator1.drawFrame(this.game.clockTick, ctx, this.x, 10);
		this.animator2.drawFrame(this.game.clockTick, ctx, 10, 250);

	}
}
