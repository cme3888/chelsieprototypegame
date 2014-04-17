console.log('');


var acuraCar = new Car ('Speedy','Acura');
var toyotaCar = new Car ('Pete','Toyota' );
var hondaCar = new Car ('Wanda','Honda');
var bmwCar = new Car ('Porky','BMW');

function Car(name, make){
	this.name = name;
	this.life = 100
	this.make = make;
		this.changeName = function(newName){
			this.name = newName;
		};
	
	};
var gun = new Weapons('gun', 81);
var jelly = new Weapons ('jelly donut', 13);
var lego = new Weapons ('lego blaster', 29);

	function Weapons(type, damage) {
		this.type = type || 'rocket launcher';
		this.damage = damage || 20;
		this.shoot = function(target){
			console.log('boom boom');
			var chance = Math.floor(Math.random() * 12);
			if(chance < 4) {
				target.addDamage = this.damage;
			}

	this.weapon = weapon;
		this.changeWeapon = function(newWeapon){
			this.weapon = newWeapon;
	this.addDamage = function(weapon){
		if (this.life <= 0) {
		alert(this.name + 'crashed! GAME OVER!');
		};
	};
var asia = new Tracks ('Asia','Rainy','7 miles');
var germany = new Tracks ('Germany','Cloudy','12 miles');
var usa = new Tracks ('United States','Clear','28 miles');

	function Tracks(place, weather, length){
		this.place = place;
		this.weather = weather;
		this.length = length;
	};
	
		};
	Car.prototype.crashCar = function() {
		this.broken = true;
	}
}};
		


