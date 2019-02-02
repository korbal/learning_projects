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
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
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
    addItem: function(name, calories){
      let ID;
      // Create ID for item
      if(data.items.length > 0){
        // Auto increment IDs
        ID = data.items[data.items.length-1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number from string 
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);
      
      // Push newly created item into the data structure (list on UI currently)
      data.items.push(newItem);

      return newItem;
    },

    // Loop through items and add total cals
    getTotalCalories: function(){
      // Let, because it will change
      let total = 0;

      data.items.forEach(function(item){
        total += item.calories;
      });
      data.totalCalories = total;

      return data.totalCalories;
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
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
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
  
  // For the main even listener loader, so we can use UISelectors
  getSelectors: function(){
    return UISelectors;
  },

  // this is on the UI
  addListItem: function(item){
    // Show the list
    document.querySelector(UISelectors.itemList).style.display = 'block';
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Add ID, this is dynamic
    li.id = `item-${item.id}`;

    // Add html
    li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em><a href="" class="secondary-content"> <i class=" edit-item fa fa-pencil"></i></a>`;
    // Insert item into UI
    document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    // After this, remove text from fields on ui. that is in the App
  },

  clearInput: function(){
    document.querySelector(UISelectors.itemNameInput).value = '';
    document.querySelector(UISelectors.itemCaloriesInput).value = '';
    // Bring back focus to item name
    document.querySelector(UISelectors.itemNameInput).focus();
  },

  hideList: function(){
    document.querySelector(UISelectors.itemList).style.display ='none';
    // used in init
  },

  showTotalCalories: function(totalCalories){
    document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
  },

  // Grab data within the Meal and Calories field on the UI. #item-name and #item-calories. need to add them to UISelectors in order to access them.
  getItemInput: function(){
    return {
      name: document.querySelector(UISelectors.itemNameInput).value,
      calories: document.querySelector(UISelectors.itemCaloriesInput).value
    }
  }

}

  
})();
// ------------------------------------------------------------

// APP CONTROLLER
// ------------------------------------------------------------
// Main app controller. runs immediately, other controllers are passed in
const App = (function(ItemCtrl, UICtrl){
  //console.log(ItemCtrl.logData());

  // Load all event listeners. this is called in init()
  const loadEventListeners = function(){
    // getSelector is a public function, this is the way it can be reached
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    // Instead of using this, we'll do that
    // document.querySelector('#add-btn');
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

  }

  // Add item submit. when you click on Add meal button
  const itemAddSubmit = function(e){
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    
    // Check for name and calorie input. If neither is empty, add item 
    if(input.name !== '' && input.calories !== ''){ 
      // Add item to itemlist 
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Show total cals in UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fileds after item is added
      UICtrl.clearInput();


    }

    e.preventDefault();
  }

  // PUBLIC METHODS (ACCESSIBLE FROM OUTSIDE)
  return {
    init: function(){
      // Fetch Items from data structure.
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
      // Populate list with items
      UICtrl.populateItemList(items);
      }

      // Get total calories. this is copy pasted. 
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      // Load all event listeners
      loadEventListeners();
      
    }
  }
  
})(ItemCtrl, UICtrl);
// ------------------------------------------------------------

// INITIALIZE APP
// ------------------------------------------------------------
App.init();