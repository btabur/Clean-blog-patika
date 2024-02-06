const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

//btabur0323
//pG8TYylYgR8Bd0cX

//connect db
mongoose.connect('mongodb+srv://btabur0323:pG8TYylYgR8Bd0cX@cluster0.zxqeyrp.mongodb.net/');

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

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Sunucu Çalıştı');
});
