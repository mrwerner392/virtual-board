class UserForm{

    constructor(callback){
        this.form = document.createElement('form')
        // Label/input for name, age, bio submit button for submit
        this.nameLabel = document.createElement('label')
        this.nameLabel.innerText = 'Name'
        this.nameInput = document.createElement('input')
        this.nameInput.name = "name"
        this.ageLabel = document.createElement('label')
        this.ageLabel.innerText = 'Age'
        this.ageInput = document.createElement('input')
        this.ageInput.name = "age"
        this.bioLabel = document.createElement('label')
        this.bioLabel.innerText = 'Bio'
        this.bioInput = document.createElement('input')
        this.bioInput.name = "bio"
        this.submit = document.createElement('input')
        this.submit.type = 'submit'

        this.form.append(this.nameLabel, this.nameInput, this.ageLabel, this.ageInput, this.bioLabel, this.bioInput, this.submit)

        this.form.addEventListener('submit', function(e) {
            e.preventDefault()
            const name = this.name.value
            const age = this.age.value
            const bio = this.bio.value
            UserAdapter.addUser(name, age, bio)
        })
    }


}