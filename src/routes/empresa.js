var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
});

router.post("/cadastrarEnd", function (req, res) {
    empresaController.cadastrarEnd(req, res);
});

module.exports = router;