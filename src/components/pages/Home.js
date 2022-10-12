import React, { useState } from "react";
import styled from "styled-components";
import TopMenu from "../public/TopMenu";

const HomeContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyBlock = styled.div``;

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 265px;
  background-color: #223764;

  .search {
    margin: 0px 0px 45px 45px;
    .search-up-text {
      color: white;
      font-size: 22px;
      /* font-weight: lighter; */
      margin-bottom: 12px;
    }
    .searchBar {
      font-size: 14px;
      .searchSelect {
        display: inline-block;
        width: 95px;
        //height: 45px;
        padding: 13px 5px 15px 15px;
        border-right: 1px solid #bdbdbd;
        border-radius: 5px 0px 0px 5px;
        background-color: white;
        img {
          margin-left: 20px;
          width: 12px;
          height: 12px;
        }
      }
      input {
        width: 335px;
        height: 45px;
        border: 0px;
        padding-left: 15px;
        :focus {
          outline: none;
        }
      }
      .fa-search {
        display: inline-block;
        width: 35px;
        line-height: 47px;
        /* height: 50px; */
        padding-left: 15px;
        border-left: 1px solid #bdbdbd;
        border-radius: 0px 5px 5px 0px;
        background-color: #3aa9e9;
        color: white;
        cursor: pointer;
        :hover {
          background-color: #0592e4;
        }
      }
    }
  }
`;

const StatusBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  width: 100%;
  //height: 100;
  background-color: #bbe6ff;

  div {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
  }
`;

const Home = () => {
  const [txId, setTxId] = useState("");
  const [data, setData] = useState(null);

  const Web3 = require("web3");
  const rpcURL = "https://goerli.infura.io/v3/8e028cf12bf04b22a4cff43a832a9c86";

  const web3 = new Web3(rpcURL);
  // 0x4b9f9c4932bb08e2353abae839be8e2c4b5f48a042891a675343b6db4811ff52

  return (
    <HomeContainerDiv>
      <TopMenu />

      {/* <BodyBlock> */}
      <SearchBlock>
        <div className="search">
          <div className="search-up-text">The Ethereum Blockchain Explorer</div>
          <div className="searchBar">
            <div className="searchSelect">
              All Filters
              <img src="/images/downArrow.png" alt="아래 화살표" />
            </div>
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
                web3.eth.getTransaction(txId).then((obj) => {
                  console.log(obj);
                  setData(obj);
                });
              }}
            />
          </div>
          <div>link</div>
        </div>
        <div>add</div>
      </SearchBlock>
      {data ? (
        <StatusBlock>
          <div>Transaction Hash: {data.hash}</div>
          <div>Status: </div>
          <div>Block: {data.blockNumber}</div>
          <div>Timestamp:</div>
          <div>From: {data.from}</div>
          <div>To: {data.to}</div>
          <div>Value: {data.value}</div>
          <div>Transaction Fee: {}</div>
          <div>Gas Price: {data.gasPrice}</div>
        </StatusBlock>
      ) : null}

      {/* </BodyBlock> */}
    </HomeContainerDiv>
  );
};

export default Home;
