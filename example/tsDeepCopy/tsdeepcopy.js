var complexData = [{ a: 2, b: 'tt' }, { a: 3, b: 'hh' }, { a: 4, b: 'yy' }, { a: 5, b: 'hh' }];
var deepCopyFun;
deepCopyFun = function (agument) {
    var copyData = Array.isArray(agument) ? [] : {};
    if (agument && typeof agument == 'object') {
        for (var i in agument) {
            if (agument.hasOwnProperty(i)) {
                if (agument[i] && typeof agument[i] == 'object') {
                    copyData[i] = deepCopyFun(agument[i]);
                }
                else {
                    copyData[i] = agument[i];
                }
            }
        }
    }
    return copyData;
};
console.log(deepCopyFun(complexData));
