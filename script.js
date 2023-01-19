// complete the given function

function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
	let x = str.length-1
   for(let i = 0;i<str.length;i++){
	   if(str[i] != str[x]){
		   return false
	   }else{
		   x--
	   }
   }
    return isPalindrome;
}

module.exports = palindrome
