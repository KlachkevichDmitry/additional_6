
module.exports = function zeros(expression) {

var five=0;
var two=0;
	
function zeros (a) {
	for (var j=0; j<a.length; j++) {
		while(a[j]>1) {
		if (a[j]%5==0) {
			five++;
			a[j]=a[j]/5;
		}else break;}
	}
	
	for (var t=0; t<a.length; t++) {
		while (a[t]>1) {
			if (a[t]%2==0) {
				two++;
				a[t]=a[t]/2;
		}else break;}
	}
				
}

var str=expression.split("*");

for (var i=0; i<str.length; i++) {
	var countForFirsrt=str[i].match(/!+/)[0].length;
	var num=Number(str[i].replace(/!/g,""));
	var arr=[];
	
	for (var x=num; x>0; x=x-countForFirsrt) {
	arr.push(x);}
	
	zeros(arr);
}

return five>two?two:five;
}
