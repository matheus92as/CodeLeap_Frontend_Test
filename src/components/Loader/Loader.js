import React, { useEffect, useState } from "react";
import { Background } from "./styled";
import Logo from '../../constants/imgs/logoInBlack.png'

const Loader = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      const main = document.getElementById("content");
      if (loader) main.style.display = "none";
      setTimeout(() => {
        main.style.display = "flex";
        loader.style.transition = "0.6s";
        loader.style.opacity = "0";
        loader.style.zIndex = "0";
      }, "2000");
    }
  }, []);

  return (
    <Background id={"globalLoader"}>
      <div className="loader">
        <img src={Logo}/>
      </div>
    </Background>
  );
};

export default Loader;