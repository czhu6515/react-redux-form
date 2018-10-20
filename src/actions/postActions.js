import { FETCH_POSTS, NEW_POST } from "./types.js";
import axios from "axios";

export function fetchPosts() {
  return async function(dispatch) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  };
}

export function createPost(post) {
  console.log("from create post");
  return async function(dispatch) {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    dispatch({
      type: NEW_POST,
      payload: data
    });
  };
}
