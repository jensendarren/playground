class FileDao {
    constructor({ db }) {
      this.db = db;
    }

    async createFile(original_path, size, redundancy, expires, autorenew, chunk_count, ul_status) {
      const [id] = await this.db('files')
        .insert({
          original_path,
          size,
          redundancy,
          expires,
          autorenew,
          chunk_count,
          ul_status
        })
        .returning('id');
      return id;
    };

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
