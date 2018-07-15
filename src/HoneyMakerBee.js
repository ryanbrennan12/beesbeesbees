var HoneyMakerBee = function() {
	this.age = 10;
	this.job = 'make honey';
	this.color = new Bee().color;
	this.food = new Grub().food;
	this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = new Grub().eat;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot += 1;
}

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot -= 1;
}