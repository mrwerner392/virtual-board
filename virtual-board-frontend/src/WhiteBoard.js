class WhiteBoard {

    constructor(title, toDos){
        this.title =  title
        this.toDos = toDos
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
        this.toDos.forEach(toDoObj => {
            let toDo = new ToDo(toDoObj.content, toDoObj.id)
            toDo.render()
            console.log(toDo)

            // pull from todo.js 
        })
    }



}