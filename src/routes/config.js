var express = require("express");
var router = express.Router();

var configController = require("../controllers/configController");

router.post("/buscarinfo", function (req, res) {
    configController.buscarinfo(req, res);
});

router.post("/buscarempresa", function (req, res) {
    configController.buscarempresa(req, res);
});

router.post("/buscarendereco", function (req, res) {
    configController.buscarendereco(req, res);
});

module.exports = router;