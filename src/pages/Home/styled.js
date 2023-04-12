import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: fit-content;
  background-color: #7695ec;
  color: white;
  width: 100%;
  font-family: "Roboto", sans-serif;
  h2 {
    margin: 35px;
  }
  img {
    margin: 35px;
    cursor: pointer;
    width: 35px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    h2 {
      margin: 20px;
    }
    img{
      margin: 20px;
    }
  }
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  height: fit-content;
  border: 1px solid #999999;
  border-radius: 15px;
  margin: 35px 0;
  padding: 0 15px;
  h2 {
    margin-left: 20px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 80%;
    h2 {
      margin-left: 5px;
    }
  }
`;

export const Mural = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  button {
    cursor: pointer;
    margin: 8px;
    font-weight: bold;
    font-size: 18px;
    border: none;
    transition: 0.5s;
    background-color: inherit;
  }
  .choosePage {
    color: #7695ec;
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin-left: 20px;
  margin-bottom: 30px;
  label {
    font-weight: bold;
  }
  input {
    padding: 8px;
    border: 1px solid #777777;
    border-radius: 10px;
    margin: 8px 0;
    width: 98%;
  }
  textarea {
    padding: 8px;
    border: 1px solid #777777;
    border-radius: 10px;
    margin: 8px 0;
    width: 98%;
  }
  button {
    align-self: flex-end;
    padding: 8px 18px;
    margin: 5px 0;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
  }
  .go {
    background-color: #7695ec;
    color: #eaeaea;
  }
  .stay {
    background-color: #999999;
    color: #999999;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    margin-left: 5px;
    input{
      width: 95%;
    }
    textarea{
      width: 95%;
    }
  }
`;
