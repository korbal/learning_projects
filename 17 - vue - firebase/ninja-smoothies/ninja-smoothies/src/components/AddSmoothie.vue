<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">
      Add New Smoothie Recipe
    </h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input
          type="text"
          name="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <!--if feedback property is not null, it will show-->
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      // starts out null, but as user starts to type into field, it's updated automatically by the bound v-model
      title: null,
      another: null,
      ingredients: [],
      feedback: null
    };
  },
  methods: {
    AddSmoothie() {
      console.log(this.title);
      console.log(this.ingredients);
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
        //if input field is empty (null) and presses tab this runs
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
}
</style>
