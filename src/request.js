fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  console.log('Response', response)
  response.json()
})
.then(users => console.log('users', users))
.catch(error => console.log('error', error))