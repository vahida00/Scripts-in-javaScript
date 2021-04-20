var givenArray=[1,3,6,2,5,10];
var partOne=[];
var partTwo=[];
var newArray=[];
/*Divide the Given Array such that even positioned elements are stored in partOne 
and odd positioned elements are stored in partTwo*/
for(var i=0;i<givenArray.length;i++){
    if(i%2==0){
        partOne.push(givenArray[i]);
    }
    else{
        partTwo.push(givenArray[i])
    }
}
console.log(partOne);
console.log(partTwo);
// Calculate the sum of the array
var sumOne=partOne.reduce((total,currentValue)=>{
    return total+currentValue;
});
console.log(sumOne);

var sumTwo=partTwo.reduce((total,currentValue)=>{
    return total+currentValue;
});
console.log(sumTwo);

// Insert the sum of the array's into new Array
newArray.push(sumOne);
newArray.push(sumTwo);
console.log(newArray);