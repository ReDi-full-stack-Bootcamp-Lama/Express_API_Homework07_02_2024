const express = require('express');

const app = express();

const port =3000;
// Middleware to disable caching for all routes
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });

app.get('/', (req,res)=>{
    //res.json({'greeting':'Hello world'})
    console.log('Request received for root URL');
    //res.data = 'some data' 
    //console.log(res.data)
    // res.send(res.data);
    res.send('<h1>Hello World</h1>')
    //console.log(res.data)
    // res.send(console.log('Hello World!'))
    //return res.data

});

app.get('/homework', (req,res)=>{
    console.log('request received for endpoint homework')
    res.send('THis is some text for the homework')
});

app.get('/homework/:id', (req,res)=>{
    const homeworkId =req.params.id;
    const data ={message:`This is the homework with the id ${homeworkId}`, from:'API'}
    res.json(data)
    
});

app.get('/error', (req, res) => {
    console.log('Request received for /error');
    res.status(500).send('Internal Server Error');
   //res.send('something')
  });

  app.get('/redirect', (req, res) => {
    console.log('Request received for /redirect');
    res.redirect('/');
  });
  
  app.get('/header', (req, res) => {
    console.log('Request received for /header');
    res.setHeader('X-Powered-By', 'Express');
    res.type('text/plain');
    res.send('This is a text response with custom header.');
  });
  
app.listen(port, ()=>(console.log(`Server is live on http://localhost:${port}`)))