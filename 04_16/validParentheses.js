/**
 * Leetcode Link: https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var opening = ["(", "{", "["];
    var closing = [")", "}", "]"];
    var count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (opening.includes(s.charAt(i))) { count += 1; }
        if (closing.includes(s.charAt(i))) { count -= 1; }
    }
    
    if (count == 0 || s == "") { return true; }
    return false;
};