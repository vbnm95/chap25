import Alpha from "./util/Alpha.js";
import VT100 from "./util/VT100.js";
import es7Sleep from "es7-sleep";

class AlphaMove extends Alpha {
	
	constructor(line, column) {
		super();
		
		if(line == undefined || column == undefined) {
			this.line = parseInt(Math.random()*20+1);
			this.column = parseInt(Math.random()*40+1);
		} else {
			this.line = line;
			this.column = column;
		}	
			
		this.isShow = true;
		this.Directions = ["RIGHT", "LEFT", "UP", "DOWN"];
		this.direction = this.Directions[parseInt(Math.random()*4)]; 
		this.show();
	}
	
	blink() {
		if(this.isShow)
			this.show();
		else
			this.hide();
		
		this.isShow = !this.isShow;
	}
	
	rightMove() {
		this.hide();
		this.column++;
		this.show();
	}
	
	leftMove() {
		this.hide();
		this.column--;
		this.show();
	}
	
	upMove() {
		this.hide();
		this.line--;
		this.show();
	}
	
	downMove() {
		this.hide();
		this.line++;
		this.show();
	}
	
	move() {
		switch(this.direction) {
			case "LEFT" :
				this.leftMove();
				break;
				
			case "RIGHT" :
				this.rightMove();
				break;
				
			case "UP" :
				this.upMove();
				break;
				
			case "DOWN" :
				this.downMove();
				break;
		}
	}
	
	sideMove() {
		if(this.line == 1 && this.column ==1) {
			this.direction = "RIGHT";
		} else if(this.line == 1 && this.column == 40) {
			this.direction = "DOWN";
		} else if(this.line == 20 && this.column == 40) {
			this.direction = "LEFT";
		} else if(this.line == 20 && this.column == 1) {
			this.direction = "UP";
		}
		
		this.move();
	}
	
	
}

VT100.clearScreen();

/*let aa = new AlphaMove(1, 1);
let speed = parseInt(Math.random()*100+50)
setInterval(() => aa.sideMove(), speed);*/

for(let i=0; i<20; i++) {
	let a = new AlphaMove();
	let aa = new AlphaMove(1, 1);
	let speed = parseInt(Math.random()*100+50)
	setInterval(() => a.blink(), speed);
	setInterval(() => aa.sideMove(), speed);
}

VT100.reset();
VT100.cursorMove(21,1);
VT100.println("Program End...")
