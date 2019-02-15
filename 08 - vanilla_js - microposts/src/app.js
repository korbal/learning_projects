import { http } from "./http";
import { ui } from "./ui";

// Get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

// Listen for cancel to go back to add state from update state
document.querySelector(".card-form").addEventListener("click", cancelEdit);

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
  const id = document.querySelector("#id").value;

  const data = {
    title,
    body
  };
  // Validate input
  if (title === "" || body === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    // Check for id, if there is no id, it's add state. if there is, it's edit state
    if (id === "") {
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
    } else {
      // Update post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert("Post updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

// Delete post
function deletePost(e) {
  // because there are a fuckton of delete buttons, we need event delegation
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert("Post removed", "alert alert-success");
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }

  e.preventDefault();
}

// Enable edit state
function enableEdit(e) {
  // Click on pencil icon is the target. it gives an <i>. parent of it is the link. that is what we need.
  // console.log(e.target);
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    // console.log(
    //   e.target.parentElement.previousElementSibling.previousElementSibling
    // );

    const data = {
      id,
      title,
      body
    };
    // Fill form with current post (that we clicked)
    ui.fillForm(data);
  }

  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}
