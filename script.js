// complete the given function

function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
    let isPalindrome = true;
    let left = 0;
    let right = s.length - 1;
    s.split('').forEach(function() {
        if(s[left] !== s[right]) {
            isPalindrome = false;
        }
        left++;
        right--;
    });
    return isPalindrome;
}

module.exports = palindrome
