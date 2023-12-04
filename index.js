
document.getElementById('readBtn').addEventListener('click', (e) => {
   e.target.previousElementSibling.classList.toggle('d-none');
})


window.onscroll = () => {
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30){
        document.getElementById('arrowBox').style.display = 'flex';
    }
    else{
        document.getElementById('arrowBox').style.display = 'none';
    }
}

document.getElementById('arrowBox').addEventListener('click', (e) => {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})
