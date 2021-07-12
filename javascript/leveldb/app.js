const db = require('./db')
const handleError = require('./error')

async function seedData() {
  await db.put('fruit:0', 'Apple');
  await db.put('fruit:1', 'Orange');
  await db.put('car:0', 'Rolls Royce');
  await db.put('car:1', 'BMW');
  await db.put('computer:0', 'ZX Spectrum');
  await db.put('computer:1', 'Windows PC');
  await db.put('computer:2', 'MacBook Air');
};

function fetchData(){
  db.get('fruit:1', function(err, value) {
    if (err) {
      return handleError(err);
    }
    console.log('value:', value);
  });
}

(async () => {
  await seedData()
  fetchData()
})()
