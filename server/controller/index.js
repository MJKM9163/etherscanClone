const Web3 = require("web3");
const dotenv = require("dotenv");

dotenv.config();

const rpcURL = `https://goerli.infura.io/v3/${process.env.KEY}`;
const web3 = new Web3(rpcURL);

const transactionCall = async (req, res, next) => {
  try {
    const { address } = req.params;
    if (address.length === 66) {
      const txData = await web3.eth.getTransaction(address);

      res.status(200).json(txData);
    } else if (address.length === 42) {
      const acData = await web3.eth.getBalance(address);

      // const eB = await web3.eth.getBlockNumber();

      // console.log("----------------");
      // let sB = eB - 100;

      // const txs = [];
      // for (let i = sB; i < eB; i++) {
      //   const blockInfo = await web3.eth.getBlock(i);
      //   const transactionsList = blockInfo.transactions;
      //   transactionsList.forEach(async (item) => {
      //     const txInfo = await web3.eth.getTransaction(item);
      //     if (txInfo.to == address || txInfo.from == address) {
      //       txs.push(txInfo.hash);
      //     }
      //   });
      // }

      // res.status(200).json([acData, txs]);
      res.status(200).json(acData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Error!");
  }
};

// const accountCall = async (req, res, next) => {
//   console.log("Asdasdas");
//   try {
//     const { address } = req.params;
//     // let eB = 0;
//     const acData = await web3.eth.getBalance(address);

//     const eB = await web3.eth.getBlockNumber(function (err, rtn) {
//       if (err) return console.log(err);
//       eB = rtn;
//     });
//     let sB = eb - 100;

//     const res = [];
//     for (let i = sB; i < eB; i++) {
//       const blockInfo = await web3.eth.getBlock(i);
//       const transactionsList = blockInfo.transactions;
//       transactionsList.forEach(async (item) => {
//         const txInfo = await web3.eth.getTransaction(item);
//         if (txInfo.to == account || txInfo.from == account) {
//           res.push(txInfo.hash);
//         }
//       });
//     }

//     res.status(200).json([acData, res]);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("Error!");
//   }
// };

// getTransactionByAccount(
//   "0xAE29B2884bE712452EBE40fD302EC3Da87C12BC5",
//   7678422,
//   7678425
// );

module.exports = {
  transactionCall,
  //accountCall,
};
