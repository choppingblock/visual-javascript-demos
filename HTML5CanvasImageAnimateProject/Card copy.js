
// Constructor
Card = function ( x, y, url ) {
	console.log('Card');

	// class vars
	this.image;
	this.x = x;
	this.y = y;
	this.rotation = 0;
	
	// method
	this.load = function (url) {
		
		 this.image = document.createElement('img'); // new Image(1, 1); 
		 this.image.src = url;
		
	}
	
	
	this.update = function(canvas) {
	
		this.rotation += 0.1;
		//console.log('this.rotation is: '+this.rotation);

		
	}
	
	
	this.draw = function(ctx) {
		
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate( this.rotation );
		
		ctx.drawImage(this.image, -this.image.width*0.5, -this.image.height*0.5);
	
		ctx.restore();
	}
	
	// init
	this.load( url );
	
}
