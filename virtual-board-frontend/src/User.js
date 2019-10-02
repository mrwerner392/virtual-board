class User {

  constructor(id, name, age, bio, whiteboard) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.bio = bio;
    this.whiteboard = whiteboard
  };

  renderProfile() {
    sideBar.content.innerHTML = '';

    // Labels and values for name, age, bio
    let nameLabel = document.createElement('h2');
    nameLabel.innerText = 'Name';

    let nameValue = document.createElement('h4');
    nameValue.innerText = this.name;

    let ageLabel = document.createElement('h2');
    ageLabel.innerText = 'Age';

    let ageValue = document.createElement('h4');
    ageValue.innerText = this.age;

    let bioLabel = document.createElement('h2');
    bioLabel.innerText = 'Bio';

    let bioValue = document.createElement('h4');
    bioValue.innerText = this.bio;

    sideBar.content.append(nameLabel, nameValue, ageLabel, ageValue, bioLabel, bioValue);

    let updateUserButton = document.createElement('button');
    updateUserButton.innerText = 'Update Profile';
    updateUserButton.addEventListener('click', () => {
      let updateUserForm = new UserForm(UserAdapter.updateUser, this);
      sideBar.content.innerHTML = '';
      sideBar.content.append(updateUserForm.form);
    })
    sideBar.content.append(updateUserButton)

    let deleteUserButton = document.createElement('button');
    deleteUserButton.innerText = 'Delete Profile';
    deleteUserButton.addEventListener('click', () => {
      UserAdapter.deleteUser(this.id);
    });
    sideBar.content.append(deleteUserButton);

  }

  renderWhiteboard() {
    let whiteboard = new WhiteBoard(this.whiteboard.id, this.whiteboard.title, this.whiteboard.to_dos, this.id)
    whiteboard.renderTitle()
    whiteboard.renderToDos()
    
  }

  makePTag() {
    // const sideBar = document.querySelector('#side-bar');
    let pTag = document.createElement('p');
    pTag.innerText = this.name;

    pTag.addEventListener('click', () => {
      this.renderProfile()
      this.renderWhiteboard()

    })
    // sideBar.append(pTag)
    return pTag
  }

}
