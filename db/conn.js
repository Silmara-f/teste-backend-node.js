const mongoose = require ("mogoose")

async function main () {
    try {
        mongoose.set("strictquery",true);

        const uri =
        
    
        await mongoose.connect ("mongodb+srv://marasilsantos234:<TpPOjUs8K4igxAy0>@cluster01.oy21f3m.mongodb.net/");
        
    
        console.log("conectado banco de dados");
  
        
    } catch (error) {
        console.log (`Erro:${error}`);
        
    } 
 }

module.exports= main;





