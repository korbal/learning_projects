<template>
  <div id="blogs">
    <h2>{{blogTitle}}</h2>
    <button @click="changeTitle">Change Blog Title</button>

    <input type="text" v-model="searchTerm" />
    <!--<div v-for="post in posts" :key="post.id">-->
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{post.title}}</h3>

      <!--snippet is a filter. defined in main js file-->
      <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs",
      posts: [],
      searchTerm: ""
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.blogTitle = newTitle;
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },

  // //lifecycle hooks. reserved names.
  // beforeCreate() {
  //   alert("before create hook");
  // },
  // beforeUpdate() {
  //   alert("before update hook");
  // },

  // good for data api calls, pull data in before displaying
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(err => {
        //if error, output to screen
        console.log(err);
        this.changeTitle("something went wrong with data fetching via axios");
      });
  }
};
</script>