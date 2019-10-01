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



}
