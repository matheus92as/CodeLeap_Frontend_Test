import { useEffect, useState } from "react";
import { BaseUrl } from "../constants/BaseUrl";
import axios from "axios";

export const GetPosts = (update, page) => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    if (page === 1) {
      axios
        .get(`${BaseUrl}`)
        .then((resposta) => {
          setPosts(resposta.data);
        })
        .catch((error) => {});
    } else {
      axios
        .get(`${BaseUrl}?limit=10&offset=${(page-1)*10}`)
        .then((resposta) => {
          setPosts(resposta.data);
        })
        .catch((error) => {});
    }
  }, [update,page]);
  return posts;
};

export default GetPosts;
