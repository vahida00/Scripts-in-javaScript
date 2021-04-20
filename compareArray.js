// Compare the array and find the differences
var arr1 = [1,2,3];
var arr2 = [100,2,1,10];
var newArray=[];
newArray=[...arr1,...arr2].filter(item=>{
    if(!arr1.includes(item) || !arr2.includes(item)){
        return item
    }
})
console.log(newArray);
// OUTPUT: [3,100,10]