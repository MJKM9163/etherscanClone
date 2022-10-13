import React from "react";
import styled from "styled-components";

const StatusBlock = styled.div`
  //position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;

  width: 100%;
  //height: 100;
  //background-color: #bbe6ff;
  font-size: 14px;
  .header {
    width: 80vw;
    margin-top: 10px;
    font-size: 24px;
    //text-align: left;
  }
  .body {
    width: 80vw;
    border: 1px solid gray;
    border-radius: 5px;
    div {
      padding: 10px 0px 10px 0px;
    }
    .tap {
      padding-left: 10px;
      border-bottom: 1px solid gray;
      span {
        margin-right: 10px;
        transition: 0.3s color;
        font-weight: bold;
        cursor: pointer;
        :hover {
          color: #3e82ff;
        }
      }
    }
    .message {
      color: #d82b2b;
      padding-left: 10px;
      border-bottom: 1px solid gray;
    }
    .statusBox {
      padding: 0px 10px 0px 10px;
      .sAll {
        //color: blue;
        border-bottom: 1px solid gray;
        .valueBox {
          display: flex;
          justify-content: space-between;
          .key {
            width: 300px;
            flex-grow: 1;
          }
          .value {
            width: 500px;
            flex-grow: 2;
          }
        }
      }
      /* .status1 {
        border-bottom: 1px solid gray;
      }
      .status2 {
        border-bottom: 1px solid gray;
      }
      .status3 {
        border-bottom: 1px solid gray;
      } */
    }
  }
`;

const Status = ({ data }) => {
  return (
    <StatusBlock>
      <div className="header">Transaction Details</div>
      <div className="body">
        <div className="tap">
          <span>Overview</span>
          <span>State</span>
        </div>
        <div className="message">
          [ This is a Goerli <b>Testnet</b> transaction only ]
        </div>
        <div className="statusBox">
          <div className="status1 sAll">
            <div className="valueBox">
              <span className="key">Transaction Hash: </span>
              <span className="value">{data.hash}</span>
            </div>
            <div className="valueBox">
              <span className="key">Status: </span>
              <span className="value">{554}</span>
            </div>
            <div className="valueBox">
              <span className="key">Block: </span>
              <span className="value">{data.blockNumber}</span>
            </div>
            <div className="valueBox">
              <span className="key">Timestamp: </span>
              <span className="value">{"10.10.10"}</span>
            </div>
          </div>
          <div className="status2 sAll">
            <div className="valueBox">
              <span className="key">From: </span>
              <span className="value">{data.from}</span>
            </div>
            <div className="valueBox">
              <span className="key">To: </span>
              <span className="value">{data.to}</span>
            </div>
          </div>
          <div className="status3 sAll">
            <div className="valueBox">
              <span className="key">Value: </span>
              <span className="value">{data.value}</span>
            </div>
            <div className="valueBox">
              <span className="key">Transaction Fee: </span>
              <span className="value">{4564654}</span>
            </div>
          </div>
          <div className="status4 sAll">
            <div className="valueBox">
              <span className="key">Gas Price: </span>
              <span className="value">{data.gasPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </StatusBlock>
  );
};

export default Status;
