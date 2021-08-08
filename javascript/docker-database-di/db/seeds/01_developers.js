exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('developers')
      .del()
      .then(function() {
          // Inserts seed entries
          return knex('developers').insert([
              {
                  email: "admin@example.com",
                  first_name: "John",
                  middle_names: "The",
                  last_name: "Admin"
              },
          ])
      })
}
