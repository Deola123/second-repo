const img = document.querySelector('img[src="img/img.jpg"]')

function imgs(image){
    mainImg = img.src
    img.src = event.target.src
    event.target.src = mainImg
}

