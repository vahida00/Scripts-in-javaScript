var coinsForAmount=[1,2,5,10,20,50,100,200,500,1000,2000]
var amount=100;
var coins=[];

for(var i=0;i<coinsForAmount.length;i++){
    if(coinsForAmount[i]<amount){
        coins.push(coinsForAmount[i]);
    }
}
console.log(coins)