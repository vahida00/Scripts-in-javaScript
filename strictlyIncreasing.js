var arr=[1,2,2]
for(var i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        print(arr + " is a Strictly increasing sequence");
    }
    else{
        print(arr +" is not a strictly increasing sequence");
    }
}
print(arr +" is strictly increasing");

/* #TEST CASES
1.[4,5,6,7,8]
2. [3,4,6,6,7,8,9]
3. [34,23,45,55,67,77] */