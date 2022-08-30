var imgs = document.querySelectorAll('.image')
var overlay = document.querySelector('.overlay')
var imgOverlay = document.querySelector('.image-overlay img')
var close = document.querySelector('i')
var btn = document.querySelector('button')
var span = document.querySelector('span')

function showOverlay(){
    overlay.style.display = 'block'
}
function hideOverlay(){
    overlay.style.display = 'none'
}

imgs.forEach(img => img.addEventListener('click', function(e){
    console.log(e.target)
    showOverlay()
    let image = e.target.getAttribute('src')
    imgOverlay.src = image
}))

close.addEventListener('click', hideOverlay)
overlay.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        hideOverlay()
    }
})

btn.addEventListener('click', function(){
    span.classList.toggle('hide')
})