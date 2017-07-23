import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../etc/config.json'

const app=express();

db.setUpConnection();

app.use(bodyParser.json());

app.get('/items',async (req,res)=>{
try{
 const data=await db.listItems()
res.send(data)
}
catch(e){
  global.console.log(e)
  res.send(e)
}

})

app.post('/items',async (req,res)=>{
  try{
  const data = await db.createItem(req.body);
  res.send(data)
}
catch(e){
  res.send({error:{message:e.message,error_name:e.name,error:e}})
}

})
app.delete('/items/:id',async (req,res)=>{
  try{
await db.deleteItem(req.params.id)
}
catch(e){
  res.send({error:{message:e.message,error_name:e.name,error:e}})
}
})

app.listen(serverPort,()=>{global.console.log(`===>SERVER IS UP ON localhost:${serverPort}`)})
