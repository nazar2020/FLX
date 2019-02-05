let a = parseFloat(prompt("Please enter a", "0"));
let b = parseFloat(prompt("Please enter b", "0"));
let c = parseFloat(prompt("Please enter c", "0"));
let x1, x2,Disc,x;
if ((isNaN(a) || isNaN(b) || isNaN(c)|| a === 0 )){
	alert('Invalid input data');
}else{
	Disc=b*b-4*a*c;
	if(Disc>0){
	x1=(-b+Math.sqrt(Disc))/(2*a);
	x2=(-b-Math.sqrt(Disc))/(2*a);
	alert("X1="+x1.toFixed(2)+"\nХ2="+x2.toFixed(2));
	}else if(Disc===0){
	x=(-b)/(2*a);
	alert("x="+x);
	}else if(Disc<0){
	alert('No solutions');
	}
}