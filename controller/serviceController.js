const { json } = require("express");
const { Service: ServiceModel } = require("../models/Service");
const { WriteError } = require("mongodb");
const { update } = require("./party.controllers");

//objeto de serviço com todos os dados necessários
const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      //criar resposta
      const response = await ServiceModel.create(service);

      resp.status(201); json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      console.log(error)

    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find()

      res.json(services); // enviando services para front end
    } catch (error) {
      console.log(error);
    
    }
  },
  get: async (req, res) => {
    try {

      const id = req.params.id;
      const service = await ServiceModel.findById(id);  // resgatar serviço do banco  

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      } 
    
      res.json(service);
    } catch (error) {
      console.log(error);
    }
    Delete : async (req, res) => {
      try {

        const id = req.params.id;
        const service = await ServiceModel.findById(id);

        if (!service) {
          res.status(404).json({ msg: "Serviço não encontrado." });
          return;
        }
      

        const deletedService = ServiceModel.findByIdAndDelete(id);  //encontrar item e excluir

        res
          .status(200)
          .json({ deletedService, msg: "Serviço excluído com sucesso" });

      } catch (error) {
        console.log(error);
      }
    };

    update: async (req, resp) => {
      const id = req.params.id;
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
    

      const updatedService = await ServiceModel.findByAndUpdate(id, service);

      if (!updatedService) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.status(200).json({ service, msg: "Serviço atualizado com sucesso!" })
    },
  
      
  };

  update: async (req, resp) => {
    try {
      
    } catch (error) {
      
    }
  },
};

module.exports = servicesController;