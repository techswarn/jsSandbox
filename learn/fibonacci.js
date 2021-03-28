let num1 = 0 , num2 = 1, nextNum;

for(let i = 0 ; i < 100 ; i++){
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
console.log(nextNum);
}