const Web3 = require("web3");
const dotenv = require("dotenv");

dotenv.config();

const rpcURL = `https://goerli.infura.io/v3/${process.env.KEY}`;
const web3 = new Web3(rpcURL);

const transactionCall = async (req, res, next) => {
  try {
    const { address } = req.params;
    const txData = await web3.eth.getTransaction(address);
    res.status(200).json(txData);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error!");
  }
};

module.exports = {
  transactionCall,
};
