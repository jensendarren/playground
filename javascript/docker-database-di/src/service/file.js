/* eslint-disable class-methods-use-this */
class FileService {
    constructor({ fileDao }) {
      this.fileDao = fileDao;
    }

    getFile(id) {
      return this.fileDao.getFile(id);
    }

    // createDev({ email, firstName, middleNames, lastName }) {
    //   const { fName, mNames, lName } = this.sanitizeNames(
    //     firstName,
    //     middleNames,
    //     lastName
    //   );

    //   return this.devDao.createDev(email, fName, mNames, lName);
    // }
  }

  module.exports = FileService;
