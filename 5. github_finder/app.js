// Instantiate Github and UI classes
const github = new Github;
const ui = new UI;

// Search input. listens to a keyup event 
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call to Github and get userdata. #p1=username
    github.getUser(userText)
    // 'data' can be anything. it's the returned data. 
    .then(data => {
      console.log(data);
      //if userText doesn't exist in Github's profile db, the return has {message: "Not Found", ....}
      if (data.profile.message === 'Not Found') {
        // Show alert that user doesn't exist. ui.js will handle this. 
        
      } else {
        // Show profile on the page. needs a user. #p1 = user
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile. ui.js will handle it. 
  }

});