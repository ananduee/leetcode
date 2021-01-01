var lengthOfLastWord = function(s) {
  if (s.length == 0) return 0;
  var i = s.length - 1;
  while (i >= 0 && s.charAt(i) == ' ') { --i; }
  if (i < 0) return 0; // whole string is empty
  if (i == 1) return 1;
  var len = 0;
  while (i >= 0 && s.charAt(i) != ' ') { --i; ++len; };
  return len;
};

console.log(lengthOfLastWord("   "))
