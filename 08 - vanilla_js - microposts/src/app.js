import { http } from "./http";
import { ui } from "./ui";

// Get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

document.querySelector(".post-submit").addEventListener("click", submitPost);

function getPosts() {
  // http
  //   .get("http://localhost:3000/posts")
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));

  // We want to show the fetched posts. handled by ui.js module

  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Submit new post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const data = {
    title,
    body
  };

  // Create post
  http
    .post("http://localhost:3000/posts", data)
    .then(data => {
      // BS classes for the warning that post was added
      ui.showAlert("Post added", "alert alert-success");
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
}
