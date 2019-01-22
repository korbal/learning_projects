class Github {
  constructor(){
    this.client_id ='0a7458465b5abbf5aefb';
    this.client_secret ='0044c2cceb794ce9e7c736bf659661edb768fe31';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    // Returning 2 different things: profiles and repos as an OBJECT. this is the advantage of promises. callbacks have to return shit one by one. allows to format async operations nicely. 
    return {
      //tetszőleges:returnable_data
      profile: profile
    }
  }
}