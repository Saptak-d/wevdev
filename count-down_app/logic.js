const targatDate = new Date('2025-01-01T00:00')
function updateCountdown(){
    const currentDate = new Date();
    const timeDiffercence = targatDate - currentDate ;
    const days = Math.floor(timeDiffercence / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiffercence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiffercence % (1000 * 60 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiffercence % (1000 * 60 )) / 1000);
     document.querySelector('#countdown').innerHTML = `${days} d
        ${hours}h ${minutes}m ${seconds}`;

        setTimeout(updateCountdown,1000)

}
updateCountdown();