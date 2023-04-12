import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  transition: 0s;
  opacity: 1;
  overflow: auto;
  background-color: #eaeaea;
  justify-content: center;
  align-items: center;
  #globalLoader {
  }
  @keyframes loaderOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75% {
      transform: scale(1.3);
      opacity: 0.75;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .loader {
    position: relative;
    width: 60%;
    animation: loaderOut 1.5s ease-in-out 1 both;
    animation-delay: 0.5s;
    img {
      width: 100%;
    }
  }
`;
