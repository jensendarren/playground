pending =  {
    0xCA223948e331B6E351895eBc72a922624dB8f405: {
      921: {
        from: "0xca223948e331b6e351895ebc72a922624db8f405",
        hash: "0xf91d876fe368c9c091a6efa8618b6eda68bcd008b0a3269817d1adb92d52c6d0",
        input: "0x",
        nonce: "0x399",
      },
      922: {
        from: "0xca223948e331b6e351895ebc72a922624db8f405",
        hash: "0x81ff82ea344b3f1a2fb9c2fa4813459c723b8b073bfe61fae5d279e9f7f64843",
        input: "0x",
        nonce: "0x39a",
      }
    },
    0xb3ca3169fb9B8f0a7678E52542716044F5364535: {
      1572: {
        from: "0xb3ca3169fb9b8f0a7678e52542716044f5364535",
        hash: "0x834fb4dbf62b783c1162bc1a4465645219a89cee9021e6669852f1b62a24e80d",
        input: "0x",
        nonce: "0x624",
      }
  	}
 }

content = {}
build = {}

for (const [sender, obj] of Object.entries(pending)) {
	for (const [nonce, tx] of Object.entries(obj)) {
  		build[tx.hash] = tx
	}
}
content = build
console.log('Content 1', content)
build = {}
pending = null
// console.log('Build', build)

pending =  {
    0xCA223948e331B6E351895eBc72a922624dB8f405: {
      921: {
        from: "0xca223948e331b6e351895ebc72a922624db8f405",
        hash: "0xf91d876fe368c9c091a6efa8618b6eda68bcd008b0a3269817d1adb92d52c6d0",
        input: "DADOU",
        nonce: "0x399"
    }
  }
}

for (const [sender, obj] of Object.entries(pending)) {
	for (const [nonce, tx] of Object.entries(obj)) {
  		build[tx.hash] = ({hash, input} = tx, {hash, input})
	}
}
content = build

console.log('Content 2', content)
build = null
pending = null
// console.log('Build', build)


// every 1 minute run the above fn


// console.log(txs)

// console.log(txs['0x3d83a283da99aff9d024549212221d40f416f6afdd24861ef23f14c216740713'])


// flat = flattenObject(pending)
// console.log(flat)

      // pending = (await web3.eth.txpool.inspect()).pending
      // counter = 0
      // // we need to load, flatten and extract the tx by the hash
      // loopSenders:
      // for (const [sender, obj] of Object.entries(pending)) {
      //   counter +=1
      //   loopNonce:
      //   for (const [nonce, txto] of Object.entries(obj)) {
      //     counter +=1
      //     console.log(txto)
      //     if(txto.startsWith('0xCA223948e331B6E351895eBc72a922624dB8f405')) {
      //       // console.log('SENDER: ', sender)
      //       tx = (await web3.eth.txpool.content()).pending[sender][nonce]
      //       console.log(`Found after ${counter}: ${tx.hash}`)
      //       pending = null
      //       break loopSenders
      //     }
      //   }
      // }
      // pending = (await web3.eth.txpool.content()).pending
      // counter = 0
      // found = false
      // // we need to load, flatten and extract the tx by the hash
      // loopSenders:
      // for (const [sender, obj] of Object.entries(pending)) {
      //   for (const [nonce, tx] of Object.entries(obj)) {
      //     counter +=1
      //     if(tx.hash == txHash) {
      //       pending = null
      //       console.log(`Found after ${counter}: ${tx.hash}`)
      //       if(tx.to && tx.to.toLowerCase().startsWith(params.router)) {
      //         process(tx)
      //       }
      //       found = true
      //       break loopSenders
      //     }
      //   }
      // }
      // if (!found) {
      //   console.log()
      //   console.log('****** NOT FOUND *******', txHash)
      //   console.log()
      // }