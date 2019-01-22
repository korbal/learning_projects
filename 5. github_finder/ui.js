class UI {
  constructor(){
    this.profile = document.querySelector('#profile');
  }

  // Class methods
  showProfile(user){
    //console.log(user);
    // Take user data and build a template literal, insert into this.profile which is that profile id on the interface. basically creating the html skeleton to display here. 
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class ="col-md-3">
          <img src="${user.avatar_url}" class="img-fluid mb-3">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3 ">View Profile</a>
        </div>
        <div class ="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos">
    `;

  }
}