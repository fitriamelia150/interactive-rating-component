function clickRating(rating) {
    document.getElementById(`rt-${rating}`).checked = true;
}

function submitRating() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.give-rating').style.display = 'none';

    setTimeout(()=>{
        document.querySelector('.loading').style.display = 'none';
    },1000)
    
    setTimeout(()=>{
        document.querySelector('.card').style.display = 'block';
        document.querySelector('.show-notif').style.display = 'flex';
        const rating = document.querySelector('input[name="rt"]:checked').value;
        document.querySelector('#show-rating').innerHTML = rating;
    },1000)

}