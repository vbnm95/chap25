main();

function main() { // 1. 선언적 함수
	
}



//console.log(add(3, 5)); add에 정의된 이후 사용 가능

let add = function(a, b) { return a+b } // 2. 익명 함수

console.log(add(3, 5));

let m = (a, b) => a+b; // 3. 화살표 함수
console.log(m(3,4));

console.log(typeof main);
console.log(typeof add);
console.log(typeof m);

