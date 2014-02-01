var LifeCounter = {
	lifeTotal: function(amount, type) {
		switch(type) {
			case "plus": this.life += amount;
			             break;
			case "minus": this.life -= amount;
			              break;
			case "reset": this.life = amount;
			              break;
			default: throw "Invalid Life Change type!";
		}
		this.update("life");
	},
	poisonTotal: function(amount, type) {
		switch(type) {
			case "plus": this.poison += amount;
			             break;
			case "minus": this.poison -= amount;
			             break;
			case "reset": this.poison = amount;
			              break;
			default: throw "Invalid Life Change type!";
		}
		this.update("poison");
	},
	update: function(type) {
		if(type === "life")
			$(".display-life span").text(this.life);
		if(type === "poison")
			$(".display-poison span").text(this.poison);
	}
}

var lifeFactory = function(startlife) {
	var life = Object.create(LifeCounter)
	if (typeof startlife !== "Number")
		startlife = 20;
	startpoison = 0;
	life.life = startlife;
	life.poison = startpoison;
	//Life events
	$(".button-group-life .plus-one").on("tap click", function(){
		life.lifeTotal(1, "plus");
	});
	$(".button-group-life .minus-one").on("tap click", function(){
		life.lifeTotal(1, "minus");
	});
	$(".button-group-life .plus-five").on("tap click", function(){
		life.lifeTotal(5, "plus");
	});
	$(".button-group-life .minus-five").on("tap click", function(){
		life.lifeTotal(5, "minus");
	});
	//Poison events
	$(".button-group-poison .plus-one").on("tap click", function(){
		life.poisonTotal(1, "plus");
	});
	$(".button-group-poison .minus-one").on("tap click", function(){
		life.poisonTotal(1, "minus");
	});
	$(".button-group-poison .plus-five").on("tap click", function(){
		life.poisonTotal(5, "plus");
	});
	$(".button-group-poison .minus-five").on("tap click", function(){
		life.poisonTotal(5, "minus");
	});
}

$(function(){
	//FastClick.attach(document.body);
	var Life = lifeFactory(20);
});