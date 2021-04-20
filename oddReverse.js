var str='There is exactly one space between each word and no punctuation is used'
var arrayOfWords=str.split(" ");
var reverseWords=[];
for(var i=0;i<arrayOfWords.length;i++){
    var word=arrayOfWords[i];
    var wordLength=word.length;
    // console.log(word +" length is "+wordLength);
    if(wordLength%2==0){
        reverseWords.push(word);
    }
    else{
        const reverseWord=Reverse(word);
        // console.log(reverseWord);
        reverseWords.push(reverseWord);
    }
}
console.log(reverseWords.join(" "));

/* Output
    Reverse the odd length words 
    "erehT is yltcaxe eno ecaps neewteb each word dna no noitautcnup is used"
*/
/* NOT A IN-BUILT FUNCTION
function Reverse(word){
     for(var i=word.length-1;i>=0;i--){
         stReverse+=word[i];
     }
      console.log(stReverse);
 }
 */

//  USING IN-BUILT FUNCTION
function Reverse(item){
    return item.split('').reverse().join('');
}