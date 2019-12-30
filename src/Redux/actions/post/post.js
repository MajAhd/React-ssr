import axios from "axios";
import { PostApi } from "../../ApiConfig";

export function getPosts(page) {
  const request = axios
    .get(PostApi + "?page=" + page)
    .then(response => response.data);
  return {
    type: "Get_Posts",
    payload: request
  };
}
export function getPost(post_id) {
  const request = axios
    .get(PostApi + "/" + post_id)
    .then(response => response.data);
  return {
    type: "Get_Post",
    payload: request
  };
}
