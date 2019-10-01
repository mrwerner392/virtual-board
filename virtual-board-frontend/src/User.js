class User {

  constructor(id, name, age, bio) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.bio = bio;
  };

  static renderUsersList(userData) {
    const sideBar = document.querySelector('#side-bar');
    sideBar.innerText = 'Returning User';
    userData.forEach(userObj => {

      let pTag = document.createElement('p');
      pTag.innerText = userObj.name;
      sideBar.append(pTag)

      pTag.addEventListener('click', () => {

        sideBar.innerHTML = '';

        // Labels and values for name, age, bio
        let nameLabel = document.createElement('h2');
        nameLabel.innerText = 'Name';

        let nameValue = document.createElement('h4');
        nameValue.innerText = userObj.name;

        let ageLabel = document.createElement('h2');
        ageLabel.innerText = 'Age';

        let ageValue = document.createElement('h4');
        ageValue.innerText = userObj.age;

        let bioLabel = document.createElement('h2');
        bioLabel.innerText = 'Bio';

        let bioValue = document.createElement('h4');
        bioValue.innerText = userObj.bio;

        sideBar.append(nameLabel, nameValue, ageLabel, ageValue, bioLabel, bioValue);

      })



      // this.makePTag(userObj);
    });
  };

  renderProfile() {

  }

  renderWhiteboard() {

  }

  makePTag() {
    // const sideBar = document.querySelector('#side-bar');
    let pTag = document.createElement('p');
    pTag.innerText = this.name;
    // sideBar.append(pTag)
    return pTag
  }

}
