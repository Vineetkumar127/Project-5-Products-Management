const mongoose= require('mongoose')
const ObjectId =mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        refs:"User",
        required:true,
        unique:true,
        trim:true
    },
    items:[{
        productId:{
            type:ObjectId,
            refs:"Product",
            required:true,
            trim:true
        },
        quantity:{
            type:Number,
            required:true,
            min:1,
            trim:true
        }
    }],
    totalPrice:{
        type:Number,
        required:true,
        trim:true
    },
    totalItems:{
        type:Number,
        required:true,
        trim:true
    },

},{timestamps:true})

module.exports=mongoose.model("Cart", cartSchema)