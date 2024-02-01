const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

//connect db
mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-test-db');

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//routes
app.get('/', postController.getAllPost);

app.get('/post/:id', postController.getPost);

app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);

app.post('/post', postController.createPost);

app.get('/post/edit/:id', pageController.getEditPage);

app.put('/post/:id', postController.updatePost);

app.delete('/post/:id', postController.deletePost);

app.listen(3000, () => {
  console.log('Sunucu Çalıştı');
});
