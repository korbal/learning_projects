<template>
  <div id="app">
    <Navbar />
    <Blogs />
    <h1>{{ title }}</h1>

    <!--friend list is not stored in components, but in main app and we pass them down from here with data binding, called props in the component data part. need to be an array-->
    <!-- @delete comes from AllFriends. it's an event, that triggers deleteFriend, which is a method here-->
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
//importing from Navbar.vue, so can use in the app (components: )
import Navbar from "./Navbar.vue";
import AllFriends from "./AllFriends.vue";
import OnlineFriends from "./OnlineFriends";
import Blogs from "./Blogs";

export default {
  name: "app",
  // need to register all components here I want to use within the main App
  components: { Navbar, OnlineFriends, AllFriends, Blogs },
  data() {
    return {
      title: "Welcome to Your Vue.js App",
      friends: [
        { name: "Mario", online: true },
        { name: "Kocsog", online: false },
        { name: "Szarfej", online: true },
        { name: "Faszbasz", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      //deleting that friend
      this.friends = this.friends.filter(friend => {
        //true or false for each friend. if true, friend stays in the array friends, if false, we'll filter that friend out (not deleting? prob would delete it from a db)
        return friend.name !== payload.name;
      });
    }
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
