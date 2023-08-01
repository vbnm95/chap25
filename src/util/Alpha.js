import VT100 from "./VT100.js";

class Alpha {	
	constructor() {
		this.line = parseInt(Math.random()*20+1);	
		this.column = parseInt(Math.random()*40+1);	
		
		do {
		this.fg = parseInt(Math.random()*8+30);
		this.bg = parseInt(Math.random()*8+40);
		} while(this.fg+10 == this.bg);
		
		this.ch = String.fromCharCode(parseInt(Math.random()*26+"A"[0].charCodeAt()));
	}
	
	show() {
		VT100.cursorMove(this.line, this.column);
		VT100.setForeground(this.fg);
		VT100.setBackground(this.bg);
		VT100.print(this.ch);
	}
	
	hide() {
		VT100.cursorMove(this.line, this.column);
		VT100.reset();
		VT100.print(" ");
	}
	
	getLine() {
		return this.line;
	}
	
	getColumn() {
		return this.column;
	}
}

export default Alpha;