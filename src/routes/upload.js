const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/uploadController');

router.route('/upload', function (req, res) {
    uploadController.upload(req, res)
})