class DoodleDot {

    static drawDot(context, x, y, radius = 5) {
      context.fillStyle = 'green'
      context.beginPath()
      context.arc(x , y , radius, 0 , 2 * Math.PI)
      context.closePath()
      context.fill()
    }

}
