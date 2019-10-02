class Canvas {

  constructor(whiteboardId, userId) {
    this.whiteboardId = whiteboardId
    this.userId = userId
  }

  render() {
    const canvas = document.createElement('canvas')
    canvas.id = 'doodle-canvas'
    const context = canvas.getContext('2d')

    let mousedown = false
    canvas.addEventListener('mousedown', function (e) {
        mousedown = true
        let x = e.offsetX
        let y = e.offsetY

        DoodleDot.drawDot(context,x,y)
    })

    canvas.addEventListener('mousemove', (e) => {
        if (mousedown === true){
            let x = e.offsetX
            let y = e.offsetY
            DoodleDot.drawDot(context,x,y)
        }
    })

    canvas.addEventListener('mouseup', (e) => {
        mousedown = false
    })

    canvas.addEventListener('mouseleave', (e) => {
        mousedown = false
    })

    return canvas
  }

  //render dots
    // for each of the user's dots, make and render new dot
    // call on the DoodleDot class to do this



}
