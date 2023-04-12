import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetPosts } from "../../actions/GetPosts";
import { useForm } from "../../actions/UseForm";
import PostCards from "../../components/PostCards/PostCards";
import { toSignup } from "../../routes/coordinator";
import {
  Header,
  MainContainer,
  Mural,
  Pagination,
  PostBox,
  PostForm,
} from "./styled";
import swal from "sweetalert";
import axios from "axios";
import { BaseUrl } from "../../constants/BaseUrl";
import Logoff from "../../constants/imgs/logoff_icon.png";

const Home = () => {
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const username = localStorage.getItem("username");
  const postList = GetPosts(update, currentPage);
  const { form, onChange, cleanInputs } = useForm({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const pages = Math.ceil(postList.count / 10);

  const createPost = (event) => {
    event.preventDefault();

    if (form.title !== "" && form.content !== "") {
      const postObj = {
        username: username,
        title: form.title,
        content: form.content,
      };

      axios.post(BaseUrl, postObj);

      swal("Successfully posted!", {
        icon: "success",
        buttons: false,
        timer: 2000,
      });

      cleanInputs();
      setTimeout(() => {
        setUpdate(!update);
      }, "1000");
    } else {
      swal({
        title: "Post was not created!",
        text: "Complete the information",
        icon: "error",
        buttons: false,
        timer: 2000,
      });
    }
  };

  const logoff = () => {
    localStorage.removeItem("username");
    toSignup(navigate);
  };

  const pageNumbers = () => {
    let i = 1;
    let num = [];
    while (i <= pages) {
      num.push(i);
      i++;
    }

    const numberOrder = num.map((num) => {
      return (
        <div key={num}>
          {num === currentPage ? (
            <button
              className="choosePage"
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}{" "}
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}{" "}
            </button>
          )}
        </div>
      );
    });

    return numberOrder;
  };

  useEffect(() => {
    if (username === null) {
      toSignup(navigate);
    }
  }, []);

  return (
    <MainContainer>
      <Header>
        <h2>CodeLeap Network</h2>
        <img onClick={logoff} src={Logoff} alt="Logoff button" />
      </Header>
      <PostBox onSubmit={createPost}>
        <h2>What's on your mind?</h2>
        <PostForm>
          <label>Title</label>
          <input
            name="title"
            placeholder="Hello world"
            type="text"
            value={form.title}
            onChange={onChange}
            required
          />
          <label>Content</label>
          <textarea
            name="content"
            placeholder="Content here"
            rows="4"
            type="text"
            value={form.content}
            onChange={onChange}
            required
          />
          {form.title !== "" && form.content !== "" ? (
            <button className="go">Create</button>
          ) : (
            <button className="stay">Create</button>
          )}
        </PostForm>
      </PostBox>
      <Mural>
        {postList.results !== undefined && postList.results.length > 0
          ? postList.results.map((post) => {
              return (
                <PostCards
                  key={post.id}
                  post={post}
                  update={update}
                  setUpdate={setUpdate}
                />
              );
            })
          : null}
      </Mural>
      <Pagination>{pageNumbers()}</Pagination>
    </MainContainer>
  );
};

export default Home;
