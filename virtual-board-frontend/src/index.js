let sideBar = new SideBar();

let mousedown = false
const canvas = document.querySelector('#doodle-canvas')
// canvas.width = canvas.height * canvas.clientWidth / canvas.clientHeight
const context = canvas.getContext('2d')

canvas.addEventListener('mousedown', function (e) {
    // debugger
    mousedown = true
    let x = e.offsetX
    let y = e.offsetY
    // console.log(x,y)
    drawDot(x,y)
})

canvas.addEventListener('mousemove', (e) => {
    if (mousedown === true){
        let x = e.offsetX
        let y = e.offsetY
        console.log(x,y)
        drawDot(x,y)
    }
})

canvas.addEventListener('mouseup', (e) => {
    // console.log('mouse was lifted' e)
    mousedown = false
})

canvas.addEventListener('mouseleave', (e) => {
    // console.log('mouse was lifted' e)
    mousedown = false
})

function drawDot(x, y, radius=5) {
    context.fillStyle = 'red'
    context.beginPath()
    context.arc(x , y , radius, 0 , 2 * Math.PI)
    context.closePath()
    context.fill()
}