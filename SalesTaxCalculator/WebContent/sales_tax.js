
function run()
{
	document.getElementById("calculate").addEventListener("click", calculateTax);
}
var $ = function (id) {
	//it returns the value of the element that has the tag of id
    return document.getElementById(id); 
}

function calculateTax()
{
	var taxRate = parseFloat(document.getElementById("taxRate").value);
	var subTotal = parseFloat(document.getElementById("subtotal").value);
	
	var tax = subTotal * taxRate / 100;
	var total = tax + subTotal;
	
	document.getElementById('salesTax').value = tax;
	document.getElementById('total').value = total;
}


