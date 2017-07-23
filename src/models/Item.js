import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const ItemSchema= new Schema({
  id:{type: Number,required:true},
  name:{type:String,required:true},
  price:{type:Number},
  quantity:{type:Number}
})

export default mongoose.model('Item',ItemSchema);
