const price=parseFloat(prompt('Please enter price','0'));
const discount=parseFloat(prompt('Please enter discount','0'));
	let discountPrice = price-price*discount/100;
	let saved = price-discountPrice;
	let out = '';

if (price > 0 && discount >= 0 && discount<=100) {
	out = 'Price without discount: '+ Math.round(price * 100)/100 + 
'\nDiscount: '+Math.round(discount * 100)/100+'%'+
'\nPrice with discount: '+ Math.round(discountPrice * 100)/100+ 
'\nSaved: '+ Math.round(saved * 100)/100;
} else {
	out = 'Invalid data';
}


alert(out);
