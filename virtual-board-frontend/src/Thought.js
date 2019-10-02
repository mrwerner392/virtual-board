class Thought{
    
    constructor(content, id, whiteboardId, userId) {
        this.content = content
        this.id = id
        this.whiteboardId = whiteboardId
        this.userId = userId
    }
    
    render(){
        let thoughtLi = document.createElement('li')
        thoughtLi.innerText = this.content

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'x';
        thoughtLi.append(deleteButton); 

        deleteButton.addEventListener('click', () => {
            fetch(`http:localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/thoughts/${this.id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(thoughtLi.remove())
          })
        return thoughtLi
        
        
    }

}