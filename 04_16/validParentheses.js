/**
 * Leetcode Link: https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {
        "(" : ")", 
        "{" :  "}", 
        "[" : "]"
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in pairs) { stack.push(s[i]); }
        else {
            let current = stack.pop();
            if(pairs[current] !== s[i]) { return false; }
        }
    }
    return stack.length == 0;
};