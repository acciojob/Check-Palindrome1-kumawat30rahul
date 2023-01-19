// complete the given function

function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
    return s === s.split('').reverse().join('');
}
module.exports = palindrome
