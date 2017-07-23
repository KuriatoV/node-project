import mongoose from "mongoose";
import Item from  '../models/Item';

export const setUpConnection=()=>{
  mongoose.connect('mongodb://localhost/tableSort',{useMongoClient:true});
}

export const listItems=()=> Item.find();

export const createItem=(data)=>{
 const item=new Item({
   id:data.id,
   name:data.name,
   price:data.price,
   quantity:data.quantity
 })
 return item.save();
}

export const  deleteItem=(id)=>Item.findById(id).remove();
