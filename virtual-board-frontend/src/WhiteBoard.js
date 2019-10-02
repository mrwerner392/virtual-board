class WhiteBoard {

    constructor(id, title, toDos, quotes, thoughts, doodleDots, userId) {
        this.id = id
        this.title =  title
        this.toDos = toDos
        this.quotes = quotes
        this.thoughts = thoughts
        this.doodleDots = doodleDots
        this.userId = userId
    }

    // render title
    renderTitle() {
        const wbTitle = document.querySelector('#wb-title')
        const title = document.createElement('h3')
        title.innerText = this.title
        wbTitle.append(title)
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
      let content = document.createElement('input')
      content.type = 'text'
      content.name = 'content'
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
       let content = document.createElement('input')
       content.type = 'text'
       content.name = 'content'
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

    // render canvas
      // clear html of doodle div
      // render new canvas object
    renderCanvas() {
      const doodleDiv = document.querySelector('#doodles')
      let canvas = new Canvas(this.doodleDots, this.id, this.userId)
      doodleDiv.append(...canvas.render())


    }

    // // Render doodle
    // renderDoodle() {
    //   // Clear the canvas
    //   context.clearRect(0, 0, canvas.width, canvas.height)
    //   this.doodleDots.forEach(dotObj => {
    //     let doodleDot = new DoodleDot(dotObj.x_coord, dotObj.y_coord, this.id, this.userId)
    //     doodleDot.render()
    //   })
    // }

}
