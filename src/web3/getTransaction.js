const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/8e028cf12bf04b22a4cff43a832a9c86";

const web3 = new Web3(rpcURL);

const txId = "{자신이 만든 트랜잭션의 해시값}";

const test = web3.eth.getTransaction(txId).then((obj) => {
  console.log(obj);
});

export default test;
