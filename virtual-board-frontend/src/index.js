let sideBar = new SideBar();

let mousedown = false
const canvas = document.querySelector('#doodle-canvas')
// canvas.width = canvas.height * canvas.clientWidth / canvas.clientHeight
const context = canvas.getContext('2d')

canvas.addEventListener('mousedown', function (e) {
    mousedown = true
    let x = e.offsetX
    let y = e.offsetY
    DoodleDot.drawDot(x,y)
})

canvas.addEventListener('mousemove', (e) => {
    if (mousedown === true){
        let x = e.offsetX
        let y = e.offsetY
        DoodleDot.drawDot(x,y)
    }
})

canvas.addEventListener('mouseup', (e) => {
    mousedown = false
})

canvas.addEventListener('mouseleave', (e) => {
    mousedown = false
})
