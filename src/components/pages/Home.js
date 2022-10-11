import React from "react";
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
      }
    }
  }
`;

const StatusBlock = styled.div`
  width: 100%;
`;
//Home Blockchain Tokens Resources More SignIn

const Home = () => {
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
            <input placeholder="Search by Address / Txn Hash / Block / Token / Ens" />
            <i class="fa fa-search" />
          </div>
          <div>link</div>
        </div>
        <div>add</div>
      </SearchBlock>
      <StatusBlock>ETHER PRICE Latest Blocks Latest Transactions</StatusBlock>
      {/* </BodyBlock> */}
    </HomeContainerDiv>
  );
};

export default Home;
