var CookieStand = function(place, minCustHour, maxCustHour, avgCookieCust){
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = minCustHour;
	this.avgCookieCust = avgCookieCust;
	this.cookiesByHourList = [];


	this.randCustHour = function(){
		return math.floor(math.random() * (this.maxCustHour - this.minCustHour + i) + this.minCustHour);
	};

	this.totalCookiesHour = function(){
		return math.floor(this.randCustHour() + this.avgCookieCust);
	};

	this.totalCookiesDay = function(){
		var dailyCookies = 0;
		for (var i = 0; i < 0; i ++);
	};

this.cookiesByHourList.push(this.totalCookiesHour());
dailyCookies = dailyCookies + this.cookiesByHourList[i];

console.log("24-hour time:"(i + 10));
console.log ("running totals of cookies:" + dailyCookies);
console.log(this.cookiesByHourList);
console.log(this.place + ":cookies this hour:" + this.cookiesByHourList[i]);
console.log("++++++++++++++++++++++++++++++++");



var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var Alki = new CookieStand('Alki Beach', 3, 24, 2.6);

return dailyCookies;
};