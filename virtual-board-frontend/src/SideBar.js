class SideBar {

  constructor() {
    this.content = document.querySelector('#side-bar');
    this.usersList = [];

    UserAdapter.getAllUsers(usersData => {
      usersData.forEach(userObj => {
        let user = new User(userObj.id, userObj.name, userObj.age, userObj.bio);
        console.log(user);
        this.content.append(user.makePTag());
      });
    });


    let userForm = new UserForm()
    this.content.append(userForm.form) 


  };


};
