foo = [4,6,3,6,9]
console.log(foo.sort())

collection = [
    {
        name: 'Alice',
        age: 20
    },
    {
        name: 'Bob',
        age: 12
    },
    {
        name: 'Charlie',
        age: 45
    }
]

// collection.map((person) => console.log(person.age))

function compare( a, b ) {
    if ( a.age < b.age ){
      return -1;
    }
    if ( a.age > b.age ){
      return 1;
    }
    return 0;
  }

// collection.sort(compare)

console.log(collection)