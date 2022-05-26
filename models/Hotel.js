import mongoose from 'mongoose';
const HotelSchema = new mongoose.Schema({
    name:{
        tyep:String,
        // required:true,
    },
    tyep:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String], 
    },
    chepestPrice:{
        type:Number,
        required:true
    }, 
    featured:{
        type:Boolean,
        default:false, 
    },

})
export default mongoose.model('Hotel', HotelSchema)