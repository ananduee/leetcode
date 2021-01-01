var convert = function(s, n) {
    if (n == 1 || n >= s.length) return s;
    var output = [];
    for (var  i = 0; i < n; ++i) {
        if (i == 0 || i == n - 1) {
            var start = i;
            while (true) {
                if (s.length > start) {
                    output.push(s[start])
                    start = start + 2*(n - 1)
                } else {
                    break;
                }
            }
        } else {
            var isMinus = true;
            var times = 0;
            var start = i;
            while (true) {
                if (s.length > start) {
                    output.push(s[start])
                    if (isMinus) {
                        times += 2;
                        start = times*(n-1)  - i;
                        isMinus = false;
                    } else {
                        start = times*(n-1)  + i;
                        isMinus = true;
                    }
                } else {
                    break;
                }
            }
        }
    }
    return output.join("")
};
