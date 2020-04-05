/**
 * Leetcode Link: https://leetcode.com/problems/sort-characters-by-frequency/ 
 * @param {string} s
 * @return {string}
 */
var sortChar = function(a, b) {
    return a - b;
}

var frequencySort = function(s) {
    var freqMap = {};
    for(c of s){
        if (freqMap[c] == undefined) { freqMap[c] = 1; }
        else { freqMap[c]++; }
    }
    var sortedChar = Object.keys(freqMap).sort((a,b) => sortChar(freqMap[b],freqMap[a]));
    result = "";
    for(character of sortedChar) {
        result += character.repeat(freqMap[character]); 
    }
    return result;
};