class DoodleDot {

    constructor(xCoord, yCoord, whiteboardId, userId){
      this.xCoord = xCoord
      this.yCoord = yCoord
    }

    render() {
      DoodleDot.drawDot(this.xCoord, this.yCoord)
    }

    static drawDot(context, x, y, radius = 5) {



      context.fillStyle = 'red'
      context.beginPath()
      context.arc(x , y , radius, 0 , 2 * Math.PI)
      context.closePath()
      context.fill()
    }


}
