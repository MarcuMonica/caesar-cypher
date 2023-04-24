function nPair(n) {
    if (n === 0)
        return [""];

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = nPair(i);
        var rights = nPair(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
}