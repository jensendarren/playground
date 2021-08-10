class FileDao {
    constructor({ db }) {
      this.db = db;
    }

    // async createFile(email, firstName, middleNames, lastName) {
    //   const [id] = await this.db('developers')
    //     .insert({
    //       email,
    //       first_name: firstName,
    //       middle_names: middleNames,
    //       last_name: lastName,
    //     })
    //     .returning('id');
    //   return id;
    // };

    async getFile(id) {
      try {
        const files = await this.db.select('*').from('files').where('id', id);
        return files && files.length >= 1 ? files[0] : null;
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  }

  module.exports = FileDao;
