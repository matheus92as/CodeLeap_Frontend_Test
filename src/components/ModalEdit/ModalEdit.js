import React from "react";
import { Background, EditForm, MainContainer } from "./styled";
import { useForm } from "../../actions/UseForm";
import EditPost from "../../actions/EditPost";

const ModalEdit = (props) => {
  const { form, onChange, cleanInputs } = useForm({
    title: "",
    content: "",
  });

  const outClick = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModal(false);
    }
  };

  const editPost = (event) => {
    event.preventDefault();
    const edit = EditPost(props.id, form).then(() => {
      setTimeout(() => {
        props.setUpdate(!props.update);
      }, "2000");
      cleanInputs();
      props.setShowModal(false);
    });
    return edit;
  };

  return (
    <Background onClick={outClick}>
      <MainContainer id="modal">
        <h2>Edit item</h2>
        <EditForm onSubmit={editPost}>
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
          <div className="chooseButtons">
            <button
              className="cancel"
              onClick={() => {
                props.setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button className="save">Save</button>
          </div>
        </EditForm>
      </MainContainer>
    </Background>
  );
};

export default ModalEdit;
