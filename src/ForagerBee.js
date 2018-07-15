var ForagerBee = function() {
	this.age = 10;
	this.job = 'find pollen';
	this.color = new Bee().color;
	this.food = new Grub().food;
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype.eat = new Grub().eat;

ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure)
}