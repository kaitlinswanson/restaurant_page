
export function loadMenu() {
const menuBody = document.createElement('p'); 
document.getElementById('content').appendChild(menuBody); 
menuBody.setAttribute('id', 'menuText');
menuBody.innerText = "Food Item List"
}


