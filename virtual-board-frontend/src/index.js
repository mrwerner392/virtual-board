let sideBar = new SideBar();

let mousedown = false
const canvas = document.querySelector('#doodle-canvas')
const context = canvas.getContext('2d')

canvas.addEventListener('mousedown', function (e) {
    // debugger
    // mousedown = true
    let x = e.pageX - this.offsetLeft
    let y = e.pageY - this.offsetTop
    console.log(this)
    console.log(x , y )
    drawDot( x , y, 20)
})

canvas.addEventListener('mousemove', () => {
    if (mousedown === true){
        drawDot()
    }
})

canvas.addEventListener('mouseup', () => {
    mousedown = false
})

function drawDot(x, y, radius=5) {
    context.fillStyle = 'red'
    context.beginPath()
    context.arc( x , y , radius, 0 , 2 * Math.PI)
    context.closePath()
    context.fill()
}