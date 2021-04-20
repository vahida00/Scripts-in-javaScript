var input='The Quick Brown Fox';
var arrayOfWords=input.split(" ");
var swapArray=[];
for(var i=0;i<arrayOfWords.length;i++){
    const item=arrayOfWords[i];
    swapArray.push(item[0].toLowerCase()+item.slice(1).toUpperCase());
}
console.log(swapArray.join(" "));