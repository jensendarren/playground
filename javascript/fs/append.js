const filename = 'append.json'
const { statSync, truncateSync, createWriteStream } = require('fs');
const util = require('util');
const cp = require('child_process');
const lines2nuke = 1;
const command = util.format('tail -n %d %s', lines2nuke, filename);

appendContent = () => {
    const stream = createWriteStream(filename, {flags:'a'});
    const content = '{"blockNumber":488,"hash":"0xbc26ac080eb56ee0d812711e85a6da045b1945d61f49c6767ffda153cc853816","from":"0x83CF1E8E2E62a952c30cCED617db51C6b7353DB7","to":"0xbE2a4E61eEDcE7102EA37B3AE0D741A50fC3ce4d","value":"0","input":"DADOUCONTENT","timestamp":1637892283}'

    stream.write(',' + content +  '\n]');

    stream.close();
}

const child = cp.exec(command, (err, stdout, stderr) => {
    if (err) throw err;
    let to_vanquish = stdout.length;
    statSync(filename, (err, stats) => {
        if (err) throw err;
        truncateSync(filename, stats.size - to_vanquish, (err) => {
            if (err) throw err;
            console.log('File truncated!');
        })
    });
});

child.on('exit', function() {
    console.log('DONE!');
    appendContent();
})