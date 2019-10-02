class Canvas {

  constructor(doodleDots, whiteboardId, userId) {
    this.doodleDots = doodleDots
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

        fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/doodle_dots`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            'x_coord': x,
            'y_coord': y
          })
        })
    })

    canvas.addEventListener('mousemove', (e) => {
        if (mousedown === true){
            let x = e.offsetX
            let y = e.offsetY
            DoodleDot.drawDot(context,x,y)

            fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/doodle_dots`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                'x_coord': x,
                'y_coord': y
              })
            })
        }
    })

    canvas.addEventListener('mouseup', (e) => {
        mousedown = false
    })

    canvas.addEventListener('mouseleave', (e) => {
        mousedown = false
    })

    // console.log(this);
    // console.log(this.doodleDots);

    this.doodleDots.forEach(dotObj => {
        // let doodleDot = new DoodleDot(dotObj.x_coord, dotObj.y_coord)
        // debugger;
        DoodleDot.drawDot(context, dotObj.x_coord, dotObj.y_coord)
    })

    return canvas
  }


}
