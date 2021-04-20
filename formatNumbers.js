var array=[22,8,301,404,35,99];
var readable=[];

for(var i=0;i<array.length;i++){
    const char=array[i].toString();
    if(char.endsWith(1))
        // readable.push(char.concat("st"));
        array[i]=char.concat("st");
    else if(char.endsWith(2))
        // readable.push(char.concat("nd"));
        array[i]=char.concat("nd");
    else{
        // readable.push(char.concat("th"));
        array[i]=char.concat("th");
    }
}
console.log(`readble array is ${array}`);
// console.log(`readble array is ${readable}`);

// this can be done using two arrays are mutating the given array