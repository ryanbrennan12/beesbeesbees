var Bee = function() {
	this.age = 5;
	this.color = 'yellow';
	this.food = new Grub().food;
	this.job = 'keep on growing';
};

Bee.prototype.eat = new Grub().eat;
