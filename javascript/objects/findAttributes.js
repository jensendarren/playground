const user = {
  Attributes: [
    {
      Name: 'email',
      Value: 'darren@ze.fi'
    },
    {
      Name: 'role',
      Value: 'owner'
    }
  ]
}

console.log(user.Attributes.find((a) => a.Name == 'role').Value)