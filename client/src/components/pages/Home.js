import React, { useState } from "react";
import styled from "styled-components";
import TopMenu from "../public/TopMenu";
import axios from "axios";
import Search from "../public/Search";
import Status from "../public/Status";
import Loading from "../public/Loading";

const HomeContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 265px;
  background-color: #223764;
  .searchOradd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;

    .search {
      width: 80vw;
      /* width: 700px; */
      margin: 0px 0px 45px 0px;
      .search-up-text {
        color: white;
        font-size: 22px;

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
          width: 30vw;
          /* width: 335px; */
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

    .addBox {
      width: 350px;
      margin-right: 0px;
      img {
        border-radius: 5px;
      }
    }
  }
`;
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTxData = (txId) => {
    axios({
      method: "get",
      url: `http://localhost:4000/transactions/${txId}`,
    }).then((res) => {
      console.log(res);
      setLoading(false);
      setData(res);
    });
  };
  // 0x4b9f9c4932bb08e2353abae839be8e2c4b5f48a042891a675343b6db4811ff52

  return (
    <HomeContainerDiv>
      <TopMenu />
      <SearchBlock>
        <div className="searchOradd">
          <div className="search">
            <div className="search-up-text">
              The Ethereum Blockchain Explorer
            </div>
            <div className="searchBar">
              <div className="searchSelect">
                All Filters
                <img src="/images/downArrow.png" alt="아래 화살표" />
              </div>
              <Search getTxData={getTxData} setLoading={setLoading} />
            </div>
            <div>link</div>
          </div>
          <div className="addBox">
            <img src="/images/addImg.png" alt="광고" />
          </div>
        </div>
      </SearchBlock>
      {data ? <Status data={data.data} /> : loading ? <Loading /> : null}

      {/* </BodyBlock> */}
    </HomeContainerDiv>
  );
};

export default Home;
