const filename = 'append.json'
const { stat, truncateSync, createWriteStream } = require('fs');

stat(filename, (err, stats) => {
    truncateSync(filename, stats.size - 1, (err) => {
        if (err) throw err;
        console.log('File truncated!');
    })
})

appendContent = () => {
    const stream = createWriteStream(filename, {flags:'a'});
    const content = '{"blockNumber":488,"hash":"0xbc26ac080eb56ee0d812711e85a6da045b1945d61f49c6767ffda153cc853816","from":"0x83CF1E8E2E62a952c30cCED617db51C6b7353DB7","to":"0xbE2a4E61eEDcE7102EA37B3AE0D741A50fC3ce4d","value":"0","input":"DADOUCONTENT","timestamp":1637892283}'

    stream.write(',' + content +  '\n]');

    stream.close();
}

appendContent();