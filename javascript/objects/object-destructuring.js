obj1 = { filename: 'a.txt', progress: 80, status: 'Uploading....' }

console.log(`Before: ${JSON.stringify(obj1)}`)

// obj1.progress = 100
// obj1.status = 'Uploaded!'

obj1 = { ...obj1, progress: 100 };
// {progress: 100, ...obj1}

console.log(`After: ${JSON.stringify(obj1)}`)