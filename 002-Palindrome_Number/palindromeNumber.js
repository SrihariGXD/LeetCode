/* Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string? */

//Solution 1 - To convert the number to a string and reverse the string to check if it matches with the original string
function isPalindrome(num){
    let numRev = parseInt(num.toString().split('').reverse().join(''));
    return numRev === num;
}

//console.log(isPalindrome(565));

//Solution 2 - Converting the number to a string and comparing the numbers from the left to the right to check if they are equal
let x = (num)=>{
    let numStr = num.toString();
    let left = 0;
    let right = numStr.length-1;
    while(left < right){
        if(numStr.charAt(left) !== numStr.charAt(right)){
            return false;
    }
        return true;
}
}
//console.log(x(-234));

//Solution 3 - Without converting the number to a string
let isPalindrome = (num)=>{
    let reverse = 0;
    let numCopy = num;
    while(numCopy>0){
        const digit = numCopy % 10;
        reverse = reverse * 10 + digit;
        numCopy = Math.floor(numCopy/10);
    }
    return reverse===num;
}
//console.log(isPalindrome(-121));
/* Note: The issue here is that JavaScript's floating-point representation may not accurately handle very large integers like the one in your example, leading to inaccuracies in the reversed number. 
This is why the code returns false even though the number is a palindrome. To accurately check for palindromes with large numbers, you should convert the number to a string and compare the characters as shown in the revised code in my previous response.*/

let isPalindrome = (num) =>{
    var str = num.toString();
    let len = str.length();
    for(let i=0;i<len/2;i++){
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }
return true;
}