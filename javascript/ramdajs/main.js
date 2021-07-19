const R = require('ramda')
const fs = require('fs')

const readFileSync = path => fs.readFileSync(path, {encoding: 'utf-8'})

const readData = R.pipe(
    R.converge(R.concat, [
        // extract btc or eth from the path string and add \t delimeter
        R.pipe(
            R.replace(/.*\//, ''),
            R.replace(/\..*/, ''),
            R.concat('date\t'),
            R.concat(R.__, '\n')
        ),
        readFileSync
    ])
)

R.pipe(
    R.map(readData),
    R.map(R.split('\n')),
    R.map(R.map(R.split('\t'))),
    R.map(R.map(R.take(2))),
    R.map(R.map(R.view(R.lensIndex(1)))),
    R.map(R.converge(R.map, [
        R.pipe(R.head, R.objOf),
        R.tail
    ])),
    R.transpose,
    R.map(R.mergeAll),
    console.log
)(['./input/btc.csv', './input/eth.csv'])

// Refactor note: Rather than having multiple R.map calls we can encapsulate in a separate R.pipe

// R.pipe(
//     R.map(R.pipe(
//         // Do all the things
//         readFileSync,
//         R.split('\n'),
//         R.map(R.split('\t')),
//         console.log
//     ))
// )(['./input/btc.csv', './input/eth.csv'])