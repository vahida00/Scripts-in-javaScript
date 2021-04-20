var givenArray=[NaN, 0, 15, false, -22,undefined, 47, null,94]
var newArray=[];
for(var i=0;i<givenArray.length;i++){
    if(givenArray[i]){
        newArray.push(givenArray[i]);
        // delete givenArray[i];
    }
}
console.log("["+givenArray +"]" +" After deleting the items the array is "+ "[" +newArray+"]");
