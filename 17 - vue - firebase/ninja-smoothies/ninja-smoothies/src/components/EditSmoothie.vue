<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <!--<h2>Edit a smoothie: {{ this.$route.params.smoothie_slug }}</h2> -->
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null
    };
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        //console.log(doc.data());
        //succesfully retrieved data from firebase, now add it to a component data
        this.smoothie = doc.data();
        //adding an id, which is a firebase doc id (link string)
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style></style>
