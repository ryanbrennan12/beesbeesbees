var RetiredForagerBee = function() {
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = 'grey';
	this.food =  new Grub().food;
	this.treasureChest = new ForagerBee().treasureChest;
};

RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.eat = new Grub().eat;

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
}