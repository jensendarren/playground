exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('files')
      .del()
      .then(function() {
          // Inserts seed entries
          return knex('files').insert([
              {
                original_path: "/data/client_storage_cache/chunk_027993f039445061ab6a74556c23f42c19f603fd12011e240cbd3f7762b174fb",
                size: 1013,
                redundancy: 1,
                expires: 1626513132144,
                autorenew: true,
                chunk_count: 1,
                ul_status: 'us99'
              },
          ])
      })
}
