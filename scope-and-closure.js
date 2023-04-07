
function outer(){
	
	let a = "hello";
	let b = {
		bObject: "world"
	};
	
	console.log("From outer: " + a);
	console.log("From outer: " + b.bObject);

  
	function inner(a,b) {
		a="rick";
		// b="morto";
		b.bObject = "morty";
		console.log("From inner: "+ a);
		// console.log("From inner: "+b);
		console.log("From inner: "+ b.bObject);
	 
	}
  
	inner(a, b);

	console.log("after inner executes: "+a);
	console.log("after inner executes: "+b.bObject);
  
}
  outer();