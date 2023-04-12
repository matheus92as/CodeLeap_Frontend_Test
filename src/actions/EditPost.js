import { BaseUrl } from "../constants/BaseUrl";
import axios from "axios";
import swal from "sweetalert";

export const EditPost = async (id, form) => {
  const edit = await axios
    .patch(`${BaseUrl}${id}/`,form)
    .then((response) => {
      swal("Successfully altered post!", {
        icon: "success",
        buttons: false,
        timer: 2500,
      });
    })
    .catch((error) => {
      swal("Unable to alter post!", {
        icon: "error",
        buttons: false,
        timer: 2500,
      });
    });
};

export default EditPost;
