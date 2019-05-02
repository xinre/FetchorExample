var fs = require('fs');

function getfilelist(path) {
    let fileList = {};
    let nowcount = true;
    filedata(path, fileList, nowcount);
    console.log(fileList);
};

function filedata(path, fileList, nowcount) {
    let sumsize = 0;
    files = fs.readdirSync(path);
    files.forEach((item) => {
        fsState = fs.statSync(path + '/' + item);
        if (fsState.isDirectory()) {
            sumsize += filedata(path + '/' + item);
            if (nowcount) {
                fileList[item] = filedata(path + '/' + item) / 1024 / 1024;
            }
        } else {
            if (nowcount) {
                fileList[item] = fsState.size / 1024 / 1024;
            } else {
                sumsize += fsState.size;
            }
        }
    });
    return sumsize;
}

getfilelist('/Users/tanghongyu/Documents/company/company');