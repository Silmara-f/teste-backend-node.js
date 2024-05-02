const mongoose = require("mongoose");

const {Schema} = mongoose;

// modelo de serviço
const serviceSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},
{timestamps:true});// salva data da criação,atualizaçaõ

const Service = mongoose.model("Service",serviceSchema)

module.exports = {
    Service,
    serviceSchema,
};


// pagina da transparência
//const serviceSchema = new Schema({
  //  name,
  //  transparency,
  //  Documento,
    
//})


