// STORAGE CONTROLLER //
// ------------------------------------------------------------


// ------------------------------------------------------------



// ITEM CONTROLLER //
// ------------------------------------------------------------
// immediately invoked iffy
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data structure / State
  // Hardcoded data to start off with the UI. These are not readable from chrome as they are private. What we RETURN (with logData) is accessible publicly. is called in the main App during development. 
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    //when we edit, the item is put at the top in the box. this is the currentItem
    currentItem: null,
    totalCalories: 0
  }

  // PUBLIC METHODS (ACCESSIBLE FROM OUTSIDE)
  return {
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }

})();
// ------------------------------------------------------------


// UI CONTROLLER 
// ------------------------------------------------------------
const UICtrl = (function(){

  const UISelectors = {
    itemList: '#item-list'
  }

  // PUBLIC METHODS (ACCESSIBLE FROM OUTSIDE)
  return {
    populateItemList: function(items){
      // Loop through fetched items, make each one a list item and insert into the ul
      let html ='';

      items.forEach(function(item){
        // html is copied from hardcoded index.html data
        html += `<li class="collection-item" id="item-${item.id}"><strong>${item.name}: </strong><em>${item.calories} Calories</em><a href="" class="secondary-content"> <i class=" edit-item fa fa-pencil"></i></a>
        </li>`;
      });
      
      // Insert list items into the UI. created UISElector object to hold #item-list as a variable so it can be changed. think pretty link. 
      //document.querySelector('#item-list').innerHTML = html;
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  }

  
})();
// ------------------------------------------------------------

// APP CONTROLLER
// ------------------------------------------------------------
// Main app controller. runs immediately, other controllers are passed in
const App = (function(ItemCtrl, UICtrl){
  //console.log(ItemCtrl.logData());

  // PUBLIC METHODS (ACCESSIBLE FROM OUTSIDE)
  return {
    init: function(){
      // Fetch Items from data structure.
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
      
    }
  }
  
})(ItemCtrl, UICtrl);
// ------------------------------------------------------------

// INITIALIZE APP
// ------------------------------------------------------------
App.init();