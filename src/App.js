import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostForm from "./components/Postcard";
import SignIn from "./components/Signin";
import CreateForm from "./components/Createlogin";
import Wrapper from "./components/Wrapper";
import Firstcards from "./components/Firstcards";
import Nextcards from "./components/Nextcards";
import Footer from "./components/Footer";
// import consoles from "./models/consoles";

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// app.use(bodyParser.json());

// consoles = require('./models/consoles')
// //connect to mongoose
// mongoose.connect('mongodb://localhost/partyup');
// var db = mongoose.connection;

// app.get('/', function(req, res){
//     res.send('Please use /api/consoles');
// });

// app.get('/api/consoles', function(req, res){
//     consoles.getConsoles(function(err, consoles){
//         if(err){
//             throw err;
//         }
//         res.json(consoles);

//     })

// });

// app.post('/api/consoles', function(req, res){
//     consoles.addConsoles(consoles, function(err, consoles){
//         if(err){
//             throw err;
//         }
//         res.json(consoles);
        

//     })


// app.get('/api/consoles/:_id', function(req, res){
//     consoles.getConsolesById(req.params._id, function(err, consoles){
//         if(err){
//             throw err;
//         }
//         res.json(consoles);

//     })

// });



// });
// app.listen(3000);
// console.log('Running on port 3000');

const styles = {
  appStyle: {
    display: "inline-flex",
    justifyContent: "center"
  },
  divStyle: {
    backgroundColor: "white"
  },
  wrapperStyle: {
    justifyContent: "center",
    display: "inline flex",
    position: "fixed",
    zIndex: "2"
  },
  linkStyle: {
    textAlign: "center",
    margin:"5px"
  }
};

const App = () => (
  <Router>
  <div style={styles.divStyle}>
    <Navbar />
    <div style={styles.wrapperStyle}>
    <Wrapper >
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/Post" component={PostForm}/>

      <Route exact path="/Createlogin" component={CreateForm} />


    </Wrapper>
          
    </div>
    <Route exact path="/Next" component={Nextcards} />
    <Route exact path="/" component={Firstcards} />
    {/* <PostForm /> */}
    {/* <SignIn /> */}
    {/* <CreateForm /> */}
    <div style={styles.linkStyle}>
    <a href="/">prev</a> <a href="/Next" float="right">next</a>
    </div>
    <div>
    <Footer />
    </div>
  </div>
  </Router>
);

export default App ;

