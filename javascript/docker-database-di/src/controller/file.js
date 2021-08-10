const ApiError = require('../error/api-error');

class FileController {
  constructor({ fileService }) {
    this.fileService = fileService;

    this.createFile = this.createFile.bind(this);
    this.getFile = this.getFile.bind(this);
  }

  async createFile(req, res) {
    try {
      const result = await this.fileService.createFile(req.body);
      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json('error');
    }
  }

  async getFile(req, res, next) {
    try {
      const fileId = req.params.id;
      console.log(`Fetching file with id: ${fileId}`)
      const file = await this.fileService.getFile(req.params.id);
      if (file == null) {
        next(ApiError.notFound(`file with id ${fileId} not found`));
        return;
      }
      res.json(file);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FileController;
