var num1, num2, result;

function factorial(num1){
    console.log(num1)
    num2 = num1 -1 ;
   for( i = num1 ; i >1 ; i--){
    
    result = num1 * num2
    num1 = result;
    num2 = num2 -1 ;

   }
console.log(result);
}

factorial(10);
