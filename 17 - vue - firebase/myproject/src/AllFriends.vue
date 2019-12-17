<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in friends" v-bind:key="index">
      <span @click="unfriend(friend.name)">{{friend.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  //receiving data from main App as props
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      //$emit is a method to use from this component. custom event, passing the name back to the parent component
      this.$emit("delete", { name });
    }
  }
};
</script>