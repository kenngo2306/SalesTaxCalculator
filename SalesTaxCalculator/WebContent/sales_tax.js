
var $ = function (id) {
	//it returns the value of the element that has the tag of id
    return document.getElementById(id); 
}

function calculate_click()
{
	var taxRate = parseFloat(document.getElementById("taxRate").value);
	var subTotal = parseFloat(document.getElementById("subtotal").value);
	if(isNaN(subTotal))
	{
		alert("invalid subtotal, please try again");
		document.getElementById('subtotal').value = '';
	}
	else if(isNaN(taxRate))
	{
		alert("invalid taxRate, please try again");
		document.getElementById('taxRate').value = '';
	}
	else
	{
		var tax = subTotal * taxRate / 100;
		var total = (tax + subTotal).toFixed(2);
		document.getElementById('salesTax').value = tax;
		document.getElementById('total').value = total;
	}
}

window.onload = function()
{
	//this function add a event listener for calculate button 
	// the calculate_click function will be called when the button is clicked
	//this function is called when the page is loaded
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus;
}


