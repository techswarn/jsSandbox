// to check weather a string is palindrome or not

const str = "racecahjr";

function isPalindrome(){
    len = str.length;
    console.log(len);

   for(let i=0 ; i < len/2 ; i++){
       console.log(str[i]);
       if(str[i] !== str[len - 1 - i]){  
         return "is not a palindrome";   
       } else {
        return "is palindorme";
       }
   }
  
}

console.log(isPalindrome(str));