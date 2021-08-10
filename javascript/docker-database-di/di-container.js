const awilix = require('awilix');
const FileController = require('./src/controller/file');
const FileService = require('./src/service/file');
const FileDao = require('./src/dao/file');
const db = require('./src/db');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    fileController: awilix.asClass(FileController),

    // services
    fileService: awilix.asClass(FileService),

    // DAOs
    fileDao: awilix.asClass(FileDao),

    // inject knexjs object with database connection pooling
    // support
    db: awilix.asValue(db),
  });
}

module.exports = {
  container,
  setup,
};
