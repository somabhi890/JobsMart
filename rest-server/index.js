const express= require('express');
const body_parser=require('body-parser');
const cors= require('cors');
const port=3000;

//let mongoClient = require('mongodb').MongoClient;

//const client = new mongoClient(uri, { useNewUrlParser: true });

let app = express();

//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  //// perform actions on the collection object
  //client.close();
//});


app.get('/', (req, res)=>{
	res.send("Hello From Designer Server");
})
app.listen(port, ()=>{
	console.log("Designer rest server running on :"+port);
});


