const app = "I don't do much.";


const token = 'tfay24kfreal7d44fbd0857'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
