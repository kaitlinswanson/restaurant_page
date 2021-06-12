
export function loadContact() {
    const contactBody = document.createElement('p'); 
    document.getElementById('content').appendChild(contactBody); 
    contactBody.setAttribute('id', 'contactText');
    contactBody.innerText = "555-555-5555"
    }
    //