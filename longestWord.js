var inputArray=['asdf', 'sd', 'something','right','position'];
var longestWordLength=inputArray[0].length;
var longestWord;
for(var i=0;i<inputArray.length;i++){
    const wordLength=inputArray[i].length;
    if(wordLength>longestWordLength){
        longestWord=inputArray[i];
        longestWordLength=wordLength;
    }
}
console.log("Longest String in array : "+longestWord+" and it's length is "+longestWordLength);