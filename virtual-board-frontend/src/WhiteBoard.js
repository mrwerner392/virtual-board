class WhiteBoard {

    constructor(id, title, toDos, quotes, thoughts, doodle, userId) {
        this.id = id
        this.title =  title
        this.toDos = toDos
        this.quotes = quotes
        this.thoughts = thoughts
        this.doodle = doodle
        this.userId = userId
    }

    // render title
    renderTitle() {
        const wbTitle = document.querySelector('#wb-title')
        const title = document.createElement('h3')
        title.style.display = 'inline'
        title.innerText = this.title
        const updateTitle = document.createElement('button')
        updateTitle.innerText = 'Change Whiteboard Name'
        updateTitle.style.display = 'inline'
        updateTitle.style.float = 'right'
        wbTitle.append(title, updateTitle)
    }

    // Render to-dos
    renderToDos() {

        // Render individual to-dos
        const toDoList = document.querySelector('#to-do-list')
        toDoList.innerHTML = '';
        this.toDos.forEach(toDoObj => {
            let toDo = new ToDo(toDoObj.content, toDoObj.id, this.id, this.userId)
            toDoList.append(toDo.render())
        })

        // Render new to-do form
        let toDoForm = document.createElement('form')
        toDoForm.classList.add('wb-form')
        let content = document.createElement('input')
        content.type = 'text'
        content.name = 'content'
        content.placeholder = 'What do you need to do...'
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

    // Render quotes
    renderQuotes() {

      // Render individual quotes
      const quoteList = document.querySelector('#quote-list')
      quoteList.innerHTML = '';
      this.quotes.forEach(quoteObj => {
          let quote = new Quote(quoteObj.content, quoteObj.id, this.id, this.userId)
          quoteList.append(quote.render())
      })

      // Render new quote form
      let quoteForm = document.createElement('form')
      quoteForm.classList.add('wb-form')
      let content = document.createElement('input')
      content.type = 'text'
      content.name = 'content'
      content.placeholder = 'What quotes inspire you...'
      let submit = document.createElement('input')
      submit.type = 'submit'
      submit.style.display = 'none'
      quoteForm.append(content, submit)
      quoteList.append(quoteForm)

      quoteForm.addEventListener('submit', e => {
        e.preventDefault();

        let content = e.target.content.value
        fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.id}/quotes`, {
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
        .then(quoteObj => {
          let quote = new ToDo(quoteObj.content, quoteObj.id)
          quoteList.insertBefore(quote.render(), quoteForm)
          quoteForm.reset()
        })
      })

    }

    // Render thoughts
    renderThoughts() {
      // Render individual thoughts
      const thoughtList = document.querySelector('#krazy-thought-list')
      thoughtList.innerHTML = '';
      this.thoughts.forEach(thoughtObj => {
          let thought = new Thought(thoughtObj.content, thoughtObj.id, this.id, this.userId)
          thoughtList.append(thought.render())
      })

       // Render new thought form
       let thoughtForm = document.createElement('form')
       thoughtForm.classList.add('wb-form')
       let content = document.createElement('input')
       content.type = 'text'
       content.name = 'content'
       content.placeholder = 'What are you thinking about...'
       let submit = document.createElement('input')
       submit.type = 'submit'
       submit.style.display = 'none'
       thoughtForm.append(content, submit)
       thoughtList.append(thoughtForm)

       thoughtForm.addEventListener('submit', e => {
        e.preventDefault();

        let content = e.target.content.value
        fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.id}/thoughts`, {
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
        .then(thoughtObj => {
          let thought = new Thought(thoughtObj.content, thoughtObj.id)
          thoughtList.insertBefore(thought.render(), thoughtForm)
          thoughtForm.reset()
        })
      })

    }

    renderCanvas() {
      const doodleDiv = document.querySelector('#doodles')
      let canvas = new Canvas(this.doodle, this.id, this.userId)
      doodleDiv.append(...canvas.render())
    }

}
