<template>
  <div class="view-profile">
    <h2>Profile for {{userId}}</h2>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: "ViewProfile",
  data() {
    return {
      //route refers to domain.com/profile/faszjozsi user_id = faszjozsi catching it
      //after catching we can output it within the template
      userId: this.$route.params.user_id
    };
  }
};
</script>

<style>
</style>