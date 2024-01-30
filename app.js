const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

// const blog = {
//   id: 1,
//   title: 'Blog title',
//   description: 'Blog description',
// };
// app.get('/', (req, res) => {
//   res.send(blog);
// });


//routes
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {

  res.render('about')
});

app.get('/add', (req, res) => {

  res.render('add_post')
});

app.get('/post', (req, res) => {

  res.render('post')
});

app.listen(3000, () => {
  console.log('Sunucu Çalıştı');
});
