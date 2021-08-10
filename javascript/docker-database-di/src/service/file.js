/* eslint-disable class-methods-use-this */
class FileService {
    constructor({ fileDao }) {
      this.fileDao = fileDao;
    }

    getFile(id) {
      return this.fileDao.getFile(id);
    }

    createFile({ original_path, size, redundancy, expires, autorenew, chunk_count, ul_status }) {
      return this.fileDao.createFile(original_path, size, redundancy, expires, autorenew, chunk_count, ul_status);
    }
  }

  module.exports = FileService;
