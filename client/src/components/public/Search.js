import React, { useState } from "react";

const Search = ({ getTxData, setLoading }) => {
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
          console.log("클릭!");
          setLoading(true);
          getTxData(txId);
        }}
      />
    </>
  );
};

export default Search;
