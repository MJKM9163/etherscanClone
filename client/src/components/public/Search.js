import React, { useState } from "react";

const Search = ({ getTxData, getAcData, setLoading }) => {
  const [txId, setTxId] = useState("");
  return (
    <>
      <input
        placeholder="Search by Address / Txn Hash / Block / Token / Ens"
        value={txId}
        onChange={(e) => {
          setTxId(e.target.value);
        }}
      />
      <i
        className="fa fa-search"
        onClick={() => {
          console.log(txId.length);
          setLoading(true);
          if (txId.length === 66) {
            getTxData(txId);
          } else if (txId.length === 42) {
            console.log(txId.length);
            getAcData(txId);
          }
        }}
      />
    </>
  );
};

export default Search;
