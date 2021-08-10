exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chunks').del()
  .then(function () {
    // Inserts seed entries
    return knex('chunks').insert([
      {
        length: 3845,
        redundancy: 1,
        expires: 1626958715045,
        autorenew: true,
        ul_status: "us99",
        dl_status: "ds99",
        file_id: 1
      }
    ]);
  });
};
