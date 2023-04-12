import React, { useState } from "react";
import { Content, Header, MainContainer } from "./styled";
import Del from "../../constants/imgs/delete_icon.png";
import Edit from "../../constants/imgs/edit_icon.png";
import { DeletePost } from "../../actions/DeletePost";
import ModalEdit from "../ModalEdit/ModalEdit";

const PostCards = (props) => {
  const [showModal, setShowModal] = useState(false);
  const timeNow = new Date();
  const postedTime = new Date(props.post.created_datetime);
  const minBetween =  Math.floor((timeNow - postedTime) / (1000 * 60));
  const hourBetween = Math.floor(minBetween / 60);
  const daysBetween =  Math.floor(hourBetween / 24);
  const username = localStorage.getItem("username");

  const deletePost = (id) => {
    const del = DeletePost(id).then(() => {
      setTimeout(() => {
        props.setUpdate(!props.update);
      }, "2000");
    });
    return del;
  };

  const comparingTime = () => {
    let msg = "";

    if (minBetween < 1) {
      msg = `Posted now`;
    } else if (minBetween > 1 && minBetween < 60) {
      msg = `${minBetween.toFixed(0)} minutes ago`;
    } else if (minBetween > 60 && minBetween <= 1439) {
      if (minBetween % 60 === 0) {
        msg = `${hourBetween.toFixed(0)} hours ago`;
      } else {
        msg = `${hourBetween.toFixed(0)} hours, ${(minBetween % 60).toFixed(
          0
        )} min ago`;
      }
    } else if(minBetween >= 1440 && hourBetween >= 24){
      if (hourBetween % 24 === 0) {
        msg = `${daysBetween.toFixed(0)} days ago`;
      } else {
        msg = `${daysBetween.toFixed(0)} days, ${(hourBetween % 24).toFixed(
          0
        )} hours ago`;
      }
    }

    return msg;
  };

  return (
    <MainContainer>
      {showModal === true ? (
        <ModalEdit
          setShowModal={setShowModal}
          id={props.post.id}
          setUpdate={props.setUpdate}
          update={props.update}
        />
      ) : null}
      <Header>
        <h1>{props.post.title}</h1>
        {props.post.username === username ? (
          <div className="userButtons">
            <img
              onClick={() => {
                deletePost(props.post.id);
              }}
              src={Del}
              alt="delete button"
            />
            <img
              onClick={() => {
                setShowModal(!showModal);
              }}
              src={Edit}
              alt="edit button"
            />
          </div>
        ) : null}
      </Header>
      <Content>
        <div className="postData">
          <p className="username">@{props.post.username}</p>
          <p className="timePass">{comparingTime()}</p>
        </div>
        <p>{props.post.content}</p>
      </Content>
    </MainContainer>
  );
};

export default PostCards;
