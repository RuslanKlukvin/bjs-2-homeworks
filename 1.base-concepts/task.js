"use strict"
function solveEquation(a, b, c) {
	let arr = [];

	let d = b**2 -4 * a * c;
  
	if (d > 0)
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	if (d == 0)
		arr = [-b / (2 * a)];
	if (d < 0)
		arr = [];
	return arr;
  }
  
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
	  return false;
	}
	let p = parseFloat(percent) / 100 / 12;
	let monthPayment = (amount - contribution) * (p + (p / (Math.pow(1 + p, countMonths) - 1)));
	return Math.round(monthPayment * countMonths * 100) / 100;
  }
