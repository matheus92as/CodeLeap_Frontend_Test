import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #dddddd;
  font-family: "Roboto", sans-serif;
  position: relative;
  #content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: fit-content;
    width: 100%;
    height: 100vh;
    z-index: 5;
  }
  .info {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 0 15px 15px 0;
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: fit-content;
      input {
        width: 480px;
        padding: 8px;
        padding-right: 0;
        margin: 5px 0;
        border-radius: 10px;
        border: 1px solid #777777;
        transition: 0.5s;
      }
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
  }
  .banner {
    background-color: #7695ec;
    border-radius: 15px 0 0 15px;
    color: white;
    img {
      width: 80%;
    }
    h1 {
      margin-top: 0;
    }
  }
  @media screen and (min-device-width: 890px) and (max-device-width: 1024px) {
    .info {
      form {
        input {
          width: 380px;
        }
      }
      h1 {
        font-size: 28px;
      }
    }
  }
  @media screen and (min-device-width: 720px) and (max-device-width: 889px) {
    .info {
      form {
        input {
          width: 300px;
        }
      }
      h1 {
        font-size: 25px;
      }
    }
  }
  @media screen and (min-device-width: 525px) and (max-device-width: 719px) {
    .info {
      form {
        input {
          width: 200px;
        }
      }
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    #content {
      flex-direction: column;
    }
    .info{
      border-radius: 0 0 15px 15px ;
    }
    .banner{
      border-radius: 15px 15px 0 0;
      h1{
        font-size: 24px;
      }
    }
    .info {
      form {
        input {
          width: 280px;
        }
      }
      h1 {
        font-size: 21px;
      }
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 320px){
    .banner{
      p{
        width: 90%;
      }
    }
    .info {
      form {
        input {
          width: 220px;
        }
      }
     
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  min-height: 70vh;
  @media screen and (min-device-width: 280px) and (max-device-width: 425px){
    width: 85%;
    min-height: 35vh;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 320px){
    min-height: 30vh;
  }
`;
