class UserAdapter {

  static getAllUsers(callback) {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(callback)
  }

  // static getUser(id) {
  //   fetch('http://localhost:3000/users/' + id)
  //   .then(res => res.json())
  //   .then(userObj => sideBar.innerText = userObj.name)
  // }

  static addUser(name, age, bio, callback) {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
        bio: bio
      })
    })
  }


}
