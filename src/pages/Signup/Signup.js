import React, { useEffect } from "react";
import { Content, MainContainer } from "./styled";
import { useForm } from "../../actions/UseForm";
import { useNavigate } from "react-router-dom";
import { toHome } from "../../routes/coordinator";
import swal from "sweetalert";
import Logo from "../../constants/imgs/logoInWhite.png";
import Loader from "../../components/Loader/Loader";

const Signup = () => {
  const { form, onChange, cleanInputs } = useForm({
    username: "",
  });
  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    if (form.username !== "") {
      localStorage.setItem("username", form.username);

      swal({
        title: "Access granted!",
        text: `Welcome ${form.username}`,
        icon: "success",
        buttons: false,
        timer: 2500,
      });
      cleanInputs();
      setTimeout(() => {
        toHome(navigate);
      }, "2500");
    } else {
      swal({
        title: "Access denied!",
        text: "Choose a valid name",
        icon: "error",
        buttons: false,
        timer: 2500,
      });
    }
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username !== null) {
      toHome(navigate);
    }
  }, []);

  return (
    <MainContainer>
      <Loader />
      <div id="content">
        <Content className="banner">
          <img src={Logo} />
          <h1>Network</h1>
          <p>We share ideas about digital products</p>
        </Content>
        <Content className="info">
          <h1>Welcome to CodeLeap network!</h1>
          <form onSubmit={signIn}>
            <label>Please enter your username</label>
            <input
              name="username"
              placeholder="username"
              type="text"
              value={form.username}
              onChange={onChange}
              required
            />
            {form.username !== "" ? (
              <button className="go">ENTER</button>
            ) : (
              <button className="stay">ENTER</button>
            )}
          </form>
        </Content>
      </div>
    </MainContainer>
  );
};

export default Signup;
