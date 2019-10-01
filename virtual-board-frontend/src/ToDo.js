class ToDo{

    constructor(content, id){
        this.content = content
        this.id = id
    }

    render(){
        const toDoList = document.querySelector('#to-do-list')
        let toDoLi = document.createElement('li')
        toDoLi.innerText = this.content
        toDoList.append(toDoLi)
        console.log(this)
    }


}