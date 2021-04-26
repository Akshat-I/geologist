class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	    var options = {

			restitution: 0.8,
			friction: 3,
			density: 30
		}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);
		}

	
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("yellow");
			//draw the ellipse here to display the rubber ball
            rectMode(CENTER);
			rect(0,0,this.w, this.h);
            

			pop()
	}
}