class Github {
  constructor(){
    this.client_id ='0a7458465b5abbf5aefb';
    this.client_secret ='0044c2cceb794ce9e7c736bf659661edb768fe31';
    this.repos_count = 5;
    //format query to get latest repos
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    // Returning 2 different things: profiles and repos as an OBJECT. this is the advantage of promises. callbacks have to return shit one by one. allows to format async operations nicely. 
    return {
      //tetszőleges:returnable_data
      profile: profile,
      repos: repos
    }
  }
}