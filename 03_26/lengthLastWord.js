/**
 * LeetCode link: https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    s.trim();
    let words = s.split(" ");
    return words[words.length-1].length;
};