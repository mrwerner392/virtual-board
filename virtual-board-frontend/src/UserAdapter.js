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
    .then(resp => resp.json())
    .then(userObj => {
      let newUser = new User(userObj.id, userObj.name, userObj.age, userObj.bio)
      newUser.renderProfile()
    })
  }

  static updateUser(name, age, bio, id) {
    fetch('http://localhost:3000/users/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
        bio: bio
      })
    })
    .then(res => res.json())
    .then(userObj => {
      let updatedUser = new User(userObj.id, userObj.name, userObj.age, userObj.bio);
      updatedUser.renderProfile();
    })
  }

}
