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
    wbTitle.innerHTML = ''
    const title = document.createElement('h2')
    title.id = 'title'
    // title.style.display = 'inline'
    title.innerText = this.title
    // const updateTitle = document.createElement('button')
    // updateTitle.innerText = 'Change Whiteboard Name'
    // updateTitle.style.display = 'inline'
    // updateTitle.style.float = 'right'
    // updateTitle.style.marginTop = '1%';
    title.addEventListener('click', () => {
      wbTitle.innerHTML = ''
      let titleForm = document.createElement('form');
      let titleInput = document.createElement('input');
      titleInput.id = 'new-title-input'
      titleInput.value = this.title;
      titleInput.name = 'title'
      let titleSubmit = document.createElement('input')
      titleSubmit.type = 'submit'
      titleSubmit.style.display = 'none'
      titleForm.append(titleInput, titleSubmit)
      titleForm.addEventListener('submit', e => {
        e.preventDefault()
        let newTitle = titleInput.value
        fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            'title': newTitle
          })
        })
        .then(res => res.json())
        .then(wbObj => {
          this.title = wbObj.title
          this.renderTitle();
        })
      })
      wbTitle.append(titleForm)
    })
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
    const toDoDiv = document.querySelector('#to-dos')
    if (toDoDiv.querySelector('.edit')) {
      toDoDiv.querySelector('.edit').remove()
    }
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.className = "edit"
    toDoDiv.append(editButton)
    editButton.addEventListener('click', (e) => {
      editButton.style.display = 'none'
      this.editMode(toDoDiv)
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
          let toDoLi = toDo.render()
          toDoLi.querySelector('button').style.display = 'inline'
          toDoList.insertBefore(toDoLi, toDoForm)
          toDoForm.reset()
        })
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
    const quoteDiv = document.querySelector('#quotes')
    if (quoteDiv.querySelector('.edit')) {
      quoteDiv.querySelector('.edit').remove()
    }
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.className = "edit"
    quoteDiv.append(editButton)
    editButton.addEventListener('click', (e) => {
      editButton.style.display = 'none'
      this.editMode(quoteDiv)
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
          let quoteLi = quote.render()
          quoteLi.querySelector('button').style.display = 'inline'
          quoteList.insertBefore(quoteLi, quoteForm)
          quoteForm.reset()
        })
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
    const krazyThoughtDiv = document.querySelector('#krazy-thoughts')
    if (krazyThoughtDiv.querySelector('.edit')) {
      krazyThoughtDiv.querySelector('.edit').remove()
    }
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.className = "edit"
    krazyThoughtDiv.append(editButton)
    editButton.addEventListener('click', (e) => {
      editButton.style.display = 'none'
      this.editMode(krazyThoughtDiv)

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
          thoughtLi = thought.render()
          thoughtLi.querySelector('button').style.display = 'inline'
          thoughtList.insertBefore(thoughtLi, thoughtForm)
          thoughtForm.reset()
        })
      })
    })

  }

  renderCanvas() {
    const doodleDiv = document.querySelector('#doodles')
    doodleDiv.innerHTML = '';
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.className = "edit"
    doodleDiv.append(editButton)
    editButton.addEventListener('click', (e) => {
      editButton.style.display = 'none'
      this.editMode(doodleDiv)
    })

    let canvas = new Canvas(this.doodle, this.id, this.userId)
    doodleDiv.append(...canvas.render())
  }

  editMode(div) {
    const whiteBoardHTML = document.querySelector("#white-board")
    whiteBoardHTML.style.gridTemplateColumns = '100%'
    whiteBoardHTML.style.gridTemplateRows = '100%'
    whiteBoardHTML.style.gridTemplateAreas = `"${div.id}"`

    div.style.borderRadius = '30px'

    let hiddenDivs = document.querySelectorAll(`.wb-section:not([id="${div.id}"`)
    console.log(hiddenDivs)

    hiddenDivs.forEach(divToHide => {
      divToHide.style.display = 'none'
      console.log(divToHide)
    })
    const closeButton = document.createElement('button')
    closeButton.innerText = "close"
    div.append(closeButton)
    closeButton.addEventListener('click', () => {
      closeButton.remove()
      this.displayMode(div, hiddenDivs)
    })

    div.querySelector('ul').querySelectorAll('button').forEach(button => {
      button.style.display = 'inline'
    })
  }

  displayMode(div, hiddenDivs) {
    const whiteBoardHTML = document.querySelector("#white-board")
    whiteBoardHTML.style.gridTemplateColumns = '50% 50%'
    whiteBoardHTML.style.gridTemplateRows = '50% 50%'
    whiteBoardHTML.style.gridTemplateAreas = '"to-dos quotes" "doodles krazy-thoughts"'
    hiddenDivs.forEach(divToShow => {
      divToShow.style.display  = 'block'
    })
    if (div.id === 'to-dos') {
      div.style.borderRadius = "30px 0 0 0"
    } else if (div.id === 'quotes'){
      div.style.borderRadius = "0 30px 0 0"
    } else if (div.id === 'doodles') {
      div.style.borderRadius = '0 0 0 30px'
    } else {
      div.style.borderRadius = "0 0 30px 0"
    }
    // console.log(div.querySelector('.edit'))
    div.querySelector('.edit').style.display = 'block'

    if (div.id !== 'doodles') {
      div.querySelector('ul').querySelectorAll('button').forEach(button => {
        button.style.display = 'none'
      })
      div.querySelector('form').style.display = 'none'
    }

  }



}
