import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 610px;
  min-height: fit-content;
  border: 1px solid #999999;
  border-radius: 16px;
  background-color: #ffffff;
  margin: auto;
  padding: 10px 20px;
  padding-right: 0;
  position: relative;
  animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  h2 {
    margin-bottom: 28px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 1%;
    right: 1%;
    padding: 5px;
    margin: 5px;
    width: auto;
    border-radius: 15px;
    font-size: 32px;
    background-color: inherit;
    color: white;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 85%;
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  label {
    font-weight: bold;
  }
  input {
    padding: 8px;
    border: 1px solid #777777;
    border-radius: 10px;
    margin: 8px 0;
    width: 97%;
  }
  textarea {
    padding: 8px;
    border: 1px solid #777777;
    border-radius: 10px;
    margin: 8px 0;
    width: 97%;
  }
  .chooseButtons {
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    margin:15px 0;
    button {
      align-self: flex-end;
      padding: 8px 20px;
      border-radius: 10px;
      transition: 0.5s;
      cursor: pointer;
    }
  }
  .cancel {
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #000000;
    margin-right: 16px;
  }
  .save {
    background-color: #47B960;
    color: #FFFFFF;
    border: 1px solid #47B960;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px){
    width: 90%;
  }
`;
