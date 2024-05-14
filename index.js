function clickRating(rating) {
    document.getElementById(`rt-${rating}`).checked = true;
}

function submitRating() {
    document.querySelector('.give-rating').style.opacity = '0';
    setTimeout(()=>{
        document.querySelector('.give-rating').style.display = 'none';
    },2000)
    
    setTimeout(()=>{
        document.querySelector('.show-notif').style.opacity = '1';
        document.querySelector('.show-notif').style.display = 'flex';
        const rating = document.querySelector('input[name="rt"]:checked').value;
        document.querySelector('#show-rating').innerHTML = rating;
    },2000)

}