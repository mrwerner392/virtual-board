class SideBar {

  constructor() {
    this.sideBar = document.querySelector('#side-bar');
    this.usersList = [];

    UserAdapter.getAllUsers(usersData => {
      usersData.forEach(userObj => {
        let user = new User(userObj.id, userObj.name, userObj.age, userObj.bio);
        console.log(user);
        this.sideBar.append(user.makePTag());
      });
    });

  };


};
