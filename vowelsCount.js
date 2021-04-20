var str="Good, better, best Never let it rest.Til your good is better and your better is best"
// var str=prompt("Enter input String to count No of vowels");
var newStr=str.toLowerCase();
var re=/[aeiou]/ig;
console.log(re);
var lenghtOfVowels=newStr.match(re).length;
console.log("Number of Vowels in the given String, "+str+" "+lenghtOfVowels);