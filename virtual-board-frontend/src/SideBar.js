class SideBar {

  constructor() {
    this.content = document.querySelector('#side-bar');
    this.content.innerHTML = '';
    this.usersList = [];

    UserAdapter.getAllUsers(usersData => {
      this.usersDiv = document.createElement('div')
      this.usersDiv.id = 'all-users'
      this.usersTitle = document.createElement('h1')
      this.usersTitle.innerText = 'Sign In'
      this.usersDiv.append(this.usersTitle)
      this.content.append(this.usersDiv)
      usersData.forEach(userObj => {
        let user = new User(userObj.id, userObj.name, userObj.age, userObj.bio, userObj.whiteboard);
        console.log(user);
        this.usersDiv.append(user.makePTag());
      });
    });


    let newUserForm = new UserForm(UserAdapter.addUser)
    this.content.append(newUserForm.formDiv)
    this.handleMarkers()
  };

  handleMarkers() {
    document.querySelector('#markers').style.opacity = '0';
    const markers = document.querySelectorAll('.marker')
    markers.forEach(marker => {
      marker.addEventListener('click', function(e) {
        // console.log(this);
        e.preventDefault()
        document.querySelector('#white-board').style.color = this.id
      })
    })
  }
};
