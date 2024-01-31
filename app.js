const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs')
const path = require('path');
const Post = require('./models/Post');

const app = express();

//connect db
mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-test-db');

//template engine
app.set("view engine","ejs")


//middlewares
app.use(express.static('public'));

app.use(express.urlencoded({extended :true}))  
app.use(express.json()) 


//routes
app.get('/', async(req, res) => {
  const posts = await Post.find({})
res.render('index',{
  posts
})
});

app.get('/post/:id', async(req, res) => {
 
 const post = await Post.findById(req.params.id)

 res.render('post',{
  post
 })
});

app.get('/about', (req, res) => {

  res.render('about')
});

app.get('/add', (req, res) => {

  res.render('add_post')
});

app.post('/post', async(req, res) => {

  await Post.create(req.body)
  res.redirect('/')
});


app.listen(3000, () => {
  console.log('Sunucu Çalıştı');
});
