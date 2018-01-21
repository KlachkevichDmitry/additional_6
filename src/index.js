module.exports = function zeros(expression) {
  //факториал-функция для нахождения факториала
function factorial (n,x) {
  if(n <= 0){ return 1; };
  return n * factorial(n-x,x);
}
var base=1;
//необходимо найти как разделять строку
str=expression.split("*");
for (var i=0; i<str.length; i++) {
var countForFirsrt=str[i].match(/!+/);//переменная определяется правильно, c двумя и одним восклицательным знаком
var n=Number(str[i].replace(/!/g,""));//переменная определяется правильно, выводит правильные цифры

//console.log(factorial(n,(countForFirsrt[0].length)));
base=base*(factorial(n,(countForFirsrt[0].length)));
}
//найти сколько нулей в конце числа-CДЕЛАНО
base=""+base;
base=base.split("").reverse().join("");
var count=base.match(/0+/);
return count[0].length;
}
