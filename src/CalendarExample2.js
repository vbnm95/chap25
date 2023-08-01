import repl from "repl";
import { sprintf } from "sprintf-js";

repl.start({
	prompt: "[year:month] 0000:00 >> ",
	eval: (year, x, y, finish) => {
		let yearMonthArr = year.trim().split(":");
		//console.log(yearMonthArr[0]);
		//console.log(yearMonthArr[1]);
		
		let replYear = Number(yearMonthArr[0]);
		let replMonth = Number(yearMonthArr[1]);
		
		if(replYear <= 0) {
			console.log("년도는 AC(서기) 입니다.");
			finish();
		} else if(replMonth >=13 || replMonth <= 0) {
			console.log("월은 1월에서 12월까지 있습니다.");
			finish();
		} else {
			printMonth(replYear, replMonth);
			finish();
		}
	}
	
});


/*let year = 1;
let month = 1;
		
printMonth(year, month);*/

console.log("Program End...");
	
function printMonth(year, month) {
	const normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 평년 월별 일수
	const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년 월별 일수
	const dayOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	let days = 1;
	let dayOfWeek = 1;
	let monthDays = 31;
		
	for(let i=1; i<=year; i++) {
		if((i%4) == 0 && (i%100) != 0 || (i%400) == 0) { // 윤년에 해당하는 경우
			if(i == year) {
				for(let j=0; j<month-1; j++) {
					days += leapYear[j];
				}
				monthDays = leapYear[month-1];
			} else {
				days += 366;
			}
		} else { // 평년에 해당하는 경우
			if(i == year) {
				for(let j=0; j<month-1; j++) {
					days += normalYear[j];
				}
				monthDays = normalYear[month-1];
			} else {
				days += 365;
			}
		}	
	}
		
	dayOfWeek = days%7;
		
	console.log(sprintf("%10s월 %2s일\n", year, month));
		
	// 요일 출력
	for(let i=0; i<7; i++) {
		if(i == 6) {
			process.stdout.write(sprintf("%3s\n", dayOfWeeks[i]));
			break;
		}
		process.stdout.write(sprintf("%3s ", dayOfWeeks[i]));
	}
		
	// 숫자 출력
	let k = 1; // 줄바꿈용
	let d = 0; // 날짜 출력용
	for(let i=0;; i++) {
		if(i<dayOfWeek) {
			process.stdout.write("    ");
		} else {
			if(k%7 == 0) {
				d++;
				process.stdout.write(sprintf("%3d\n", d));
			} else {
				d++;
				process.stdout.write(sprintf("%3d ", d));
			}
		}
		k++;
		if(d == monthDays)
			break;
	}
	console.log('\n');
}
