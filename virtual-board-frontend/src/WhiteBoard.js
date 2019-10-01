class WhiteBoard {

    constructor(id, title, toDos, userId){
        this.id = id
        this.title =  title
        this.toDos = toDos
        this.userId = userId
    }

    // render title
    renderTitle(){
        const wbTitle = document.querySelector('#wb-title')
        const title = document.createElement('h3')
        title.innerText = this.title
        wbTitle.append(title)
    }

    //render todos
    renderToDos(){
        const toDoList = document.querySelector('#to-do-list')
        toDoList.innerHTML = '';
        this.toDos.forEach(toDoObj => {
            let toDo = new ToDo(toDoObj.content, toDoObj.id, this.id, this.userId)
            toDoList.append(toDo.render())
        })

        let toDoForm = document.createElement('form')
        let content = document.createElement('input')
        content.type = 'text'
        content.name = 'content'
        let submit = document.createElement('input')
        submit.type = 'submit'
        submit.style.display = 'none'
        toDoForm.append(content, submit)
        toDoList.append(toDoForm)

        toDoForm.addEventListener('submit', e => {
          e.preventDefault();

          let content = e.target.content.value
          fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.id}/to_dos`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              content: content
            })
          })
          .then(res => res.json())
          .then(toDoObj => {
            let toDo = new ToDo(toDoObj.content, toDoObj.id)
            toDoList.insertBefore(toDo.render(), toDoForm)
            toDoForm.reset()
          })
        })

    }



}
