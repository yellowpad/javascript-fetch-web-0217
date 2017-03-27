const app = "I don't do much.";


const token = 'df12ce078e6347f7d44fbd0837d5cb0cc39d2e57'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));