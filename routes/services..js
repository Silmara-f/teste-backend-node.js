const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router
.route("/services")
.post ((req,res) => serviceController.create(req,res));

router
.route("/services")
.get((req,res)=>serviceController.getAll(req,res));


router
.route("/services/:id")
.get((req,res) => serviceController.get(req,res)); // esta vindo um dado que vai ser alterado dinamicamente parametro :id

router
.route("/services/:id")
.delete((req,res) => serviceController.delete(req,res)); // esta 

router
.route("/services/:id")
.put((req,res) => serviceController.update(req,res)); // esta 


//funções
module.exports = router;