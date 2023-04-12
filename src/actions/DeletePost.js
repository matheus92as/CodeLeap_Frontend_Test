import { BaseUrl } from "../constants/BaseUrl";
import axios from "axios";
import swal from "sweetalert";

export const DeletePost = async (id) => {
   const willDelete = await swal({
        title: "Are you sure?",
        text: "You will not be able to recover this post.",
        dangerMode: true,
        buttons: true,
    });
    if (willDelete) {
        axios
            .delete(`${BaseUrl}${id}/`)
            .then((response) => {
                swal("Successfully deleted post!", {
                    icon: "success",
                    buttons: false,
                    timer: 2500,
                });
            })
            .catch((error) => {
                swal("Unable to delete post!", {
                    icon: "error",
                    buttons: false,
                    timer: 2500,
                });
            });
    } else {
        swal("The post will not be deleted, for now!", {
            buttons: false,
            timer: 3000,
        });
    }
};

export default DeletePost;
