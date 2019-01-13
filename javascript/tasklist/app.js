//define UI variables

//new task form
const form = document.querySelector('#task-form')

//collection of added tasks
const taskList = document.querySelector('.collection')

//clear button on the bottom 
const clearBtn = document.querySelector('.clear-tasks')

//filter input field
const filter = document.querySelector('#filter')

//add new task input field
const taskInput = document.querySelector('#task')

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
  //add task event
  form.addEventListener('submit', addTask);

  //remove task event listener. there is dynamic content, so the whole list is listening
  taskList.addEventListener('click', removeTask);

  //clear tasks in the collection event
  clearBtn.addEventListener('click', clearTasks);

  filter.addEventListener('keyup', filterTasks);

};

//add task. this is an event handler, when task form is submitted
function addTask(e){
  if(taskInput.value === ''){
    alert('add a task first');
  } else {
    //if new task is not empty, we want to create a new list item
    //create li element
    const li = document.createElement('li');
    //add class that will indicate that this is a collection item in materialize
    li.className = 'collection-item';

    //create text node. this is where this li receives the task we input
    li.appendChild(document.createTextNode(taskInput.value));

    //adding the X link, the delete link
    const link = document.createElement('a');
    
    //add class. secondary-content aligns it right in materialize
    link.className = 'delete-item secondary-content';

    //add icon html (the X button from font awesome)
    link.innerHTML = '<i class="fa fa-remove"></i>'

    //append the link to li
    li.appendChild(link);

    //append the finished list item to the ul (task list)
    taskList.appendChild(li);

    //clearing input for new task and focusing on it again for rapid adding
    taskInput.value = '';
    taskInput.focus();
  }

  e.preventDefault();
}

function removeTask(e){
    //console.log(e.target);
    //the whole form listens. we need to target the little X icon
    if(e.target.parentElement.classList.contains('delete-item')){
      //console.log(e.target)
      //when clicking on the link, we need the whole li to disappear that is parent's parent
      if(confirm('Are you sure you want to delete the task?')){
        e.target.parentElement.parentElement.remove();
      }
      
    }
    
}

function clearTasks(e){
  //simpler, but slow
  //taskList.innerHTML = '';
  //faster:
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
  
}

function filterTasks(e){
  //catch what istyped into the filter input
  const text = e.target.value.toLowerCase();

  //grab all collection items and loop through them and only display with filter criteria. queryselector returns a nodelist and foreach can handle that.  
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) !=-1){
      //if text is found in array, show it. 
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })

  
}