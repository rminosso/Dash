const express = require('express');
const router = express.Router();
const configUpload = require('../../config/uploadConfig');
const uploadController = require('../controllers/uploadController');

// Rota de post para upload de arquivos
router.post(
    '/upload',
    configUpload.single('file'),
    (req, res) => {
    uploadController.upload(req, res);
});

module.exports = router;