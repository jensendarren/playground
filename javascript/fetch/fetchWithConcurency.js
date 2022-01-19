const fetch = require('node-fetch');

urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]

  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  )).then(array => {
    console.log('Users: ', array[0])
    console.log('Posts: ', array[1])
    console.log('Albums: ', array[2])
  })