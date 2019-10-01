class SideBar {

  constructor() {
    this.content = document.querySelector('#side-bar');
    this.usersList = [];

    UserAdapter.getAllUsers(usersData => {
      // console.log(usersData)
      usersData.forEach(userObj => {
        let user = new User(userObj.id, userObj.name, userObj.age, userObj.bio, userObj.whiteboard);
        console.log(user);
        this.content.append(user.makePTag());
      });
    });


    let newUserForm = new UserForm(UserAdapter.addUser)
    this.content.append(newUserForm.form)


  };


};
