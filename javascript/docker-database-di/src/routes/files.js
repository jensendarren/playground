const express = require('express');
const { container } = require('../../di-container');
const validate = require('../middleware/validate');
const fileDto = require('../dto/file');

const fileController = container.resolve('fileController');

const router = express.Router();
// router.post('/', validate(fileDto), fileController.createFile);
router.get('/:id', fileController.getFile);

module.exports = router;
