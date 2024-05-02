const mongoose  = require("mongoose")

const { Schema }= mongoose

const {serviceSchema} =  require("./service")

const partySchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    author:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    budget:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    services:{
        type:[serviceSchema],

    },
},

{timestamps:true}
);
const Party = mongoose.model("Party", partySchema);
module.exports = Party;