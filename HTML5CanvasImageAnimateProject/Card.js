
// Constructor
Card = function ( x, y, url ) {
	console.log('Card');

	// class vars
	this.image;
	this.pos = new Vector2(x,y); 
	this.vel = new Vector2(0,0);
	this.rotationMultiplier = randomRange(-8, 8);
	this.offsetX;
	this.offsetY; 
	
	// method
	this.load = function (url) {
		
		this.image = document.createElement('img'); // new Image(1, 1); 
		this.image.src = url;
		
		// add velocity
		//this.pos.plusEq( new Vector2(50,50) );
		
		this.offsetX = randomRange( -(this.image.width * 0.2), (this.image.width * 0.2) );
		this.offsetY = randomRange( -(this.image.height * 0.2), (this.image.height * 0.2) );
	}
	
	
	this.update = function(canvas) {
	
		//this.rotation += 0.1;
		//console.log('this.rotation is: '+this.rotation);
		
		// add velocity
		this.pos.plusEq(this.vel);

		// add damping
		this.vel.multiplyEq(0.95);

	}
	
	
	this.draw = function(ctx) {
		
		ctx.save();
		
		// this would center the image
		ctx.translate(this.pos.x, this.pos.y);
		
		// the Vector2 angle function uses atan2 to calc rotation.
		ctx.rotate( this.pos.angle(true) * this.rotationMultiplier);

		// translating it again makes the wobble (non centered) spin.
		ctx.translate(this.offsetX, this.offsetY);

		var padding = 6;
		ctx.fillStyle = '#fff';
		ctx.strokeStyle = '#ccc';
		ctx.lineWidth = 1; 
		ctx.beginPath(); 
		ctx.rect(-(this.image.width*0.5)-padding,-(this.image.height*0.5)-padding, this.image.width+(padding*2) ,this.image.height+(padding*2));
		ctx.fill();
		ctx.stroke();
		ctx.closePath(); 

		ctx.drawImage(this.image, -this.image.width*0.5, -this.image.height*0.5);
	
		ctx.restore();
	}
	
	// returns a random number between the two limits provided 
	function randomRange(min, max)
	{
		return ((Math.random()*(max-min)) + min); 
	}
	
	// init
	this.load( url );
	
}
