// require and instantiate express
const app = require('express')();

// fake posts to simulate database
const posts = [
  {
    id: 1,
    author: 'Garth',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Terrance',
    title: 'Express: Starting from the bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Vanessa',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

// ser the view engine to ejs
app.set('view engine', 'ejs');

// blog home page
app.get('/', (req, res) => {
  // render 'home.ejs' with list of posts
  res.render('home', {posts: posts})
});

// blog posts
app.get('/post/:id', (req, res) => {
  // find the post in the 'posts' array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the /post.ejs' template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
});

app.listen(9000);

console.log('app listening on port 9000');
