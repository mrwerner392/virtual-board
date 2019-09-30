const sideBar = document.querySelector('#side-bar');

fetch("http://localhost:3000/users/2")
.then(res => res.json())
.then(userObj => sideBar.innerText = userObj.name)
