require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyWeb3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/OsunRiverNFT.sol/TorNFT.json");

const contractAddress = "0x370332D1E6Fa12031D508a2d0b351CAF00191a1B";
const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress);

const METAMASK_PUBLIC_KEY = process.env.METAMASK_PUBLIC_KEY;
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

async function mintNFT(ownerAccount, tokenURI) {
    // get the nonce - nonce is needed for security reasons. It keeps track of the number of
    // transactions sent from our address and prevents replay attacks.
    const nonce = await alchemyWeb3.eth.getTransactionCount(METAMASK_PUBLIC_KEY, 'latest');

    const tx = {
        from: METAMASK_PUBLIC_KEY, // our MetaMask public key
        to: contractAddress, // the smart contract address we want to interact with
        nonce: nonce, // nonce with the no of transactions from our account
        gas: 1000000, // fee estimate to complete the transaction
        data: nftContract.methods
        .createNFT(ownerAccount, tokenURI)
        .encodeABI(), // call the createNFT function from our OsunRiverNFT.sol file and pass the account that should receive the minted NFT.
    };

    const signPromise = alchemyWeb3.eth.accounts.signTransaction(
        tx,
        METAMASK_PRIVATE_KEY
    );

    signPromise
        .then((signedTx) => {
        alchemyWeb3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err, hash) {
            if (!err) {
                console.log(
                "The hash of our transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of our transaction!"
                );
            } else {
                console.log(
                "Something went wrong when submitting our transaction:",
                err
                );
            }
            }
        );
        })
        .catch((err) => {
            console.log(" Promise failed:", err);
        }
    )
};

mintNFT('0x4f5877E51067d0d68784aA74C39871cb2eF2D9eB', "https://ipfs.io/ipfs/QmQCBMW9xYvTC272AT72351qZ8Aiqn9GX1w9ourpP2UUBS") // pass the owner account address to transfer the NFT to and the CID to the JSON file uploaded to Pinata