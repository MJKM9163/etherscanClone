import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopMenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    :hover {
      color: #3e82ff;
    }
  }

  .logo {
    padding: 7px 0px 10px 45px;
    .etherscanImg {
      width: 160px;
      height: 36.3px;
    }
  }
  .menus {
    width: 600px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding-right: 30px;
    font-weight: lighter;
    //background-color: #80808083;
    .hoem {
      color: ${(props) => (props.select === "home" ? "#3e82ff" : "block")};
    }
    .blockchain {
      color: ${(props) =>
        props.select === "blockchain" ? "#3e82ff" : "block"};
    }
    .tokens {
      color: ${(props) => (props.select === "tokens" ? "#3e82ff" : "block")};
    }
    .resources {
      color: ${(props) => (props.select === "resources" ? "#3e82ff" : "block")};
    }
    .more {
      color: ${(props) => (props.select === "more" ? "#3e82ff" : "block")};
    }

    .imgBox {
      .ethereumImg {
        padding: 2px 2px;
        border-radius: 15%;
        background-color: #c8e4e983;
        width: 21px;
        height: 22.5px;
      }
    }
  }
`;

const TopMenu = () => {
  const [select, setSelect] = useState("home");
  return (
    <TopMenuDiv select={select}>
      <span className="logo">
        <img
          className="etherscanImg"
          src="images/etherscan-logo.png"
          alt="이더스캔 이미지"
        />
      </span>
      <span className="menus">
        <Link
          className="hoem"
          to="/"
          onClick={() => {
            setSelect("home");
          }}
        >
          Home
        </Link>
        <Link
          className="blockchain"
          onClick={() => {
            setSelect("blockchain");
          }}
        >
          Blockchain
        </Link>
        <Link
          className="tokens"
          onClick={() => {
            setSelect("tokens");
          }}
        >
          Tokens
        </Link>
        <Link
          className="resources"
          onClick={() => {
            setSelect("resources");
          }}
        >
          Resources
        </Link>
        <Link
          className="more"
          onClick={() => {
            setSelect("more");
          }}
        >
          More
        </Link>
        <Link className="signIn">Sign In</Link>
        <Link className="imgBox">
          <img
            className="ethereumImg"
            src="images/ethereum-logo.png"
            alt="이더리움 이미지"
          />
        </Link>
      </span>
    </TopMenuDiv>
  );
};

export default TopMenu;
