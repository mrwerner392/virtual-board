class UserForm{

    constructor(callback, user = null){
        this.form = document.createElement('form')
        // Label/input for name, age, bio submit button for submit
        this.nameLabel = document.createElement('label')
        this.nameLabel.innerText = 'Name'
        this.nameInput = document.createElement('input')
        this.nameInput.name = "name"
        user ? this.nameInput.value = user.name : this.nameInput.placeholder = "Name";
        this.ageLabel = document.createElement('label')
        this.ageLabel.innerText = 'Age'
        this.ageInput = document.createElement('input')
        this.ageInput.name = "age"
        user ? this.ageInput.value = user.age : this.ageInput.placeholder = "Age";
        this.bioLabel = document.createElement('label')
        this.bioLabel.innerText = 'Bio'
        this.bioInput = document.createElement('input')
        this.bioInput.name = "bio"
        user ? this.bioInput.value = user.bio : this.bioInput.placeholder = "Bio";
        this.submit = document.createElement('input')
        this.submit.type = 'submit'

        this.form.append(this.nameLabel, this.nameInput, this.ageLabel, this.ageInput, this.bioLabel, this.bioInput, this.submit)

        this.form.addEventListener('submit', function(e) {
            e.preventDefault()
            const name = this.name.value
            const age = this.age.value
            const bio = this.bio.value
            const id = user ? user.id : null
            callback(name, age, bio, id)
        })
    }


}
