let add = (a, b) => { return a + b};
console.log(add(2, 3));

let print = v => console.log(v);
print(3);

let add2 = (a, b) => a+b;
print(add2(4,5));



function pow(a, b=1) { // default parameter
	return a**b;
}

print(pow(10));



function sum2(...args) {
	let sum = 0;
	for(let i=0; i<args.length; i++) {
		sum += args[i];
	}
	return sum;
}

print(sum2(1,2,3,4,10));
