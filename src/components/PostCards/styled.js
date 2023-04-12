import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: fit-content;
  background-color: #eaeaea;
  width: 85%;
  border-radius: 15px;
  margin: 10px 0;
  font-family: "Roboto", sans-serif;
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  background-color: #7695ec;
  color: white;
  text-align: left;
  border: 1px solid #7695ec;
  border-radius: 15px 15px 0 0;
  padding: 0 15px;
  .userButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
    margin-right: 15px;
    img {
      width: 35px;
      cursor: pointer;
    }
  }
  h1 {
    margin-left: 15px;
    width: 60%;
    overflow: auto;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #7695ec;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bacaf5;
      border-radius: 35px;
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    h1 {
      font-size: 1.5rem;
      margin-left: 0px;
    }
    .userButtons{
      width: 65px;
      margin-right: 0px;
      img {
      width: 25px;
    }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: left;
  border: 1px solid #999999;
  border-top: none;
  border-radius: 0 0 15px 15px;
  padding: 10px 15px;
  padding-bottom: 20px;
  background-color: #ffffff;
  .postData {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    font-weight: bold;
    color: #777777;
  }
  .username {
    width: 50%;
    overflow: auto;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bacaf5;
      border-radius: 35px;
    }
  }
  p {
    margin: 15px;
    margin-bottom: 0;
    word-break: break-all;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    p {
      font-size: 0.9rem;
      margin: 10px 0;
    }
    .timePass{
      text-align: end;
    }
  }
`;
