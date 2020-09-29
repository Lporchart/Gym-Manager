const modaloverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener('click', function(){
        const videoID = card.getAttribute("id");
        window.location.href = `/video?id=${videoID}`
    });
}

