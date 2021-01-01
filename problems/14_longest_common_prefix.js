var longestCommonPrefix = function(strs) {
  if (strs.length == 1) {
    return strs[0];
  } else if (strs.length == 0) {
    return ""
  }
  var i = 0;
  while (true) {
    if (strs[0].length <= i) {
      return strs[0].length == 0 ? "" : strs[0].substr(0, i);
    }
    var charToMatch = strs[0].charAt(i);
    for (var j = 1, _len = strs.length; j < _len; ++j) {
      if (strs[j].length <= i || strs[j].charAt(i) != charToMatch) {
        return i == 0 ? "" : strs[0].substr(0, i);
      }
    }
    ++i;
  }
}

console.log(longestCommonPrefix(["ac","ac","a","a"]))
