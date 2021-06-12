
export function loadHours() {
    const hoursBody = document.createElement('p'); 
    hoursBody.setAttribute('id', 'hoursText')
    document.getElementById('content').appendChild(hoursBody); 
    hoursBody.innerText = "8-5"
    }
    